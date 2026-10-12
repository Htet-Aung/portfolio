import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';
import { gzipSync } from 'node:zlib';

const root = path.resolve(
  process.argv[2] ?? fileURLToPath(new URL('../dist/', import.meta.url)),
);
const errors = [];

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const file = path.join(directory, entry.name);
      if (entry.isDirectory()) return htmlFiles(file);
      return entry.name.endsWith('.html') ? [file] : [];
    }),
  );
  return nested.flat();
}

function walk(node, callback) {
  callback(node);
  for (const child of node.childNodes ?? []) walk(child, callback);
}

function attribute(node, name) {
  return node.attrs?.find((attr) => attr.name === name)?.value;
}

let files;
try {
  files = await htmlFiles(root);
} catch {
  console.error('No build found. Run npm run build before npm run verify.');
  process.exit(1);
}

const documents = new Map();
const titles = new Set();
const descriptions = new Set();
for (const file of files) {
  const document = parse(await readFile(file, 'utf8'));
  const ids = new Set();
  const references = [];
  let headingCount = 0;
  let description = false;
  let title = '';
  const metadata = {};
  const canonicals = [];
  const scripts = [];
  const styles = [];
  const structured = [];
  walk(document, (node) => {
    if (node.tagName === 'title')
      title = (node.childNodes ?? [])
        .map((child) => child.value ?? '')
        .join('');
    if (node.tagName === 'meta') {
      const key = attribute(node, 'name') ?? attribute(node, 'property');
      if (key) metadata[key] = attribute(node, 'content');
    }
    if (node.tagName === 'link' && attribute(node, 'rel') === 'canonical')
      canonicals.push(attribute(node, 'href'));
    if (node.tagName === 'link' && attribute(node, 'rel') === 'stylesheet')
      styles.push(attribute(node, 'href'));
    if (node.tagName === 'script') {
      const body = (node.childNodes ?? [])
        .map((child) => child.value ?? '')
        .join('');
      if (attribute(node, 'type') === 'application/ld+json')
        structured.push(body);
      else scripts.push({ src: attribute(node, 'src'), body });
    }
    if (
      node.tagName === 'img' &&
      (!attribute(node, 'alt') ||
        !attribute(node, 'width') ||
        !attribute(node, 'height'))
    )
      errors.push(`${file}: image needs alt text and intrinsic dimensions`);
    if (
      node.tagName === 'a' &&
      attribute(node, 'target') === '_blank' &&
      !['noopener', 'noreferrer'].every((rel) =>
        attribute(node, 'rel')?.split(' ').includes(rel),
      )
    )
      errors.push(`${file}: new-tab link needs noopener noreferrer`);
    const id = attribute(node, 'id');
    if (id) {
      if (ids.has(id))
        errors.push(`${path.relative(root, file)}: duplicate id "${id}"`);
      ids.add(id);
    }
    if (node.tagName === 'h1') headingCount++;
    if (node.tagName === 'html' && !attribute(node, 'lang'))
      errors.push(`${file}: missing document language`);
    if (node.tagName === 'meta' && attribute(node, 'name') === 'description')
      description = Boolean(attribute(node, 'content'));
    for (const attr of node.attrs ?? []) {
      if (['href', 'src', 'poster'].includes(attr.name))
        references.push(attr.value);
      if (attr.name === 'srcset')
        references.push(
          ...attr.value
            .split(',')
            .map((candidate) => candidate.trim().split(/\s+/)[0]),
        );
    }
  });
  if (headingCount !== 1)
    errors.push(
      `${path.relative(root, file)}: expected one h1, found ${headingCount}`,
    );
  if (!description)
    errors.push(`${path.relative(root, file)}: missing description`);
  if (!title || titles.has(title))
    errors.push(`${file}: missing or duplicate title`);
  titles.add(title);
  if (descriptions.has(metadata.description))
    errors.push(`${file}: duplicate description`);
  descriptions.add(metadata.description);
  for (const key of [
    'og:title',
    'og:description',
    'og:image',
    'og:image:alt',
    'twitter:card',
    'twitter:title',
    'twitter:description',
    'twitter:image',
  ]) {
    if (!metadata[key]) errors.push(`${file}: missing ${key}`);
  }
  if (
    metadata['og:title'] !== title ||
    metadata['twitter:title'] !== title ||
    metadata['og:description'] !== metadata.description ||
    metadata['twitter:description'] !== metadata.description
  )
    errors.push(`${file}: social metadata differs from page metadata`);
  references.push(metadata['og:image'], metadata['twitter:image']);
  documents.set(file, {
    ids,
    references,
    metadata,
    canonicals,
    scripts,
    styles,
    structured,
  });
}

const home = documents.get(path.join(root, 'index.html'));
if (!home) throw new Error('Homepage is missing from the build.');
const indexable = home.metadata.robots === 'index, follow';
const origin = home.canonicals[0]
  ? new URL(home.canonicals[0]).origin
  : 'https://portfolio.local';
const expectedSitemap = [];
let largestScript = 0;
let largestStyle = 0;

let checkedReferences = 0;
for (const [file, document] of documents) {
  const relative = path
    .relative(root, file)
    .split(path.sep)
    .join('/')
    .replace(/index\.html$/, '');
  const base = new URL(relative, origin + '/');
  const is404 = relative === '404.html';
  if (is404) {
    if (
      !document.metadata.robots?.startsWith('noindex') ||
      document.canonicals.length
    )
      errors.push('404 must remain unindexed without a canonical.');
  } else {
    if (document.metadata.robots !== home.metadata.robots)
      errors.push(`${relative}: inconsistent indexing policy`);
    if (indexable && document.canonicals.length !== 1)
      errors.push(`${relative}: release needs exactly one canonical`);
    if (document.canonicals.length) {
      if (
        document.canonicals.length !== 1 ||
        document.canonicals[0] !== base.href
      )
        errors.push(`${relative}: incorrect canonical URL`);
      expectedSitemap.push(base.href);
      if (document.metadata['og:url'] !== base.href)
        errors.push(`${relative}: incorrect Open Graph URL`);
      if (
        document.metadata['og:image'] !==
        new URL('/social-card.png', origin).href
      )
        errors.push(`${relative}: incorrect social image URL`);
    }
  }
  let scriptBytes = 0;
  const scriptSources = new Set();
  for (const script of document.scripts) {
    if (!script.src) {
      scriptBytes += gzipSync(script.body).length;
      continue;
    }
    const url = new URL(script.src, base);
    if (url.origin !== origin) {
      errors.push(`${relative}: unexpected remote JavaScript`);
      continue;
    }
    scriptSources.add(
      path.join(root, decodeURIComponent(url.pathname).slice(1)),
    );
  }
  for (const source of scriptSources)
    scriptBytes += gzipSync(await readFile(source)).length;
  largestScript = Math.max(largestScript, scriptBytes);
  if (scriptBytes > 30 * 1024)
    errors.push(`${relative}: JavaScript exceeds 30 KiB gzip`);
  let styleBytes = 0;
  for (const source of new Set(document.styles))
    styleBytes += gzipSync(
      await readFile(path.join(root, new URL(source, base).pathname.slice(1))),
    ).length;
  largestStyle = Math.max(largestStyle, styleBytes);
  if (styleBytes > 20 * 1024)
    errors.push(`${relative}: CSS exceeds 20 KiB gzip`);
  for (const reference of document.references) {
    if (!reference || reference === '#') {
      errors.push(
        `${path.relative(root, file)}: empty or placeholder destination`,
      );
      continue;
    }
    const url = new URL(reference, base);
    if (url.origin !== base.origin) continue;
    checkedReferences++;
    let destination = path.join(
      root,
      decodeURIComponent(url.pathname).slice(1),
    );
    if (
      path.relative(root, destination).startsWith('..') ||
      path.isAbsolute(path.relative(root, destination))
    ) {
      errors.push(`${file}: reference leaves the build directory`);
      continue;
    }
    try {
      if ((await stat(destination)).isDirectory())
        destination = path.join(destination, 'index.html');
      await stat(destination);
    } catch {
      errors.push(
        `${path.relative(root, file)}: missing destination ${reference}`,
      );
      continue;
    }
    if (
      url.hash &&
      documents.has(destination) &&
      !documents.get(destination).ids.has(decodeURIComponent(url.hash.slice(1)))
    ) {
      errors.push(`${path.relative(root, file)}: missing anchor ${reference}`);
    }
  }
}

const robots = await readFile(path.join(root, 'robots.txt'), 'utf8');
const sitemap = await readFile(path.join(root, 'sitemap.xml'), 'utf8');
const headers = await readFile(path.join(root, '_headers'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (match) => match[1],
);
if (
  JSON.stringify(sitemapUrls.sort()) !== JSON.stringify(expectedSitemap.sort())
)
  errors.push('Sitemap does not match canonical content routes.');
if (indexable) {
  if (
    !robots.includes(`Sitemap: ${origin}/sitemap.xml`) ||
    /^Disallow: \/$/m.test(robots)
  )
    errors.push(
      'Release robots.txt must allow crawling and identify the sitemap.',
    );
  if (headers.includes('X-Robots-Tag: noindex, nofollow'))
    errors.push('Release headers must not prevent indexing.');
} else if (
  !/^Disallow: \/$/m.test(robots) ||
  !headers.includes('X-Robots-Tag: noindex, nofollow')
)
  errors.push('Preview robots.txt and response headers must prevent indexing.');
if (
  !headers.includes('X-Content-Type-Options: nosniff') ||
  !headers.includes('Cache-Control: public, max-age=31536000, immutable')
)
  errors.push('Deployment headers are incomplete.');
if (home.structured.length !== 1)
  errors.push('Homepage requires one structured-data graph.');
else {
  try {
    const schema = JSON.parse(home.structured[0]);
    if (
      schema['@context'] !== 'https://schema.org' ||
      !schema['@graph']?.some(
        (entry) =>
          entry['@type'] === 'Person' && entry.name === 'Htet Aung Khant',
      )
    )
      errors.push('Homepage structured data is invalid.');
  } catch {
    errors.push('Homepage structured data is not valid JSON.');
  }
}
const social = await readFile(path.join(root, 'social-card.png'));
if (
  social.readUInt32BE(16) !== 1200 ||
  social.readUInt32BE(20) !== 630 ||
  social.length > 250 * 1024
)
  errors.push('Social card must be 1200×630 and at most 250 KiB.');

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(
  `Verified ${files.length} HTML pages and ${checkedReferences} internal link/asset references. No missing destinations, duplicate IDs, or placeholder links.`,
);
console.log(
  `SEO, structured data, sitemap, robots, social card, and ${indexable ? 'release' : 'preview'} headers verified. Largest page JavaScript: ${largestScript} B gzip; CSS: ${largestStyle} B gzip.`,
);
