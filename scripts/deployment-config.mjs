/** @param {Record<string, string | undefined>} [env] */
export function getDeployment(env = process.env) {
  const rawUrl = env.SITE_URL?.trim();
  let siteUrl;
  if (rawUrl) {
    const url = new URL(rawUrl);
    if (
      url.protocol !== 'https:' ||
      url.username ||
      url.password ||
      url.pathname !== '/' ||
      url.search ||
      url.hash ||
      ['localhost', '127.0.0.1', '[::1]'].includes(url.hostname)
    ) {
      throw new Error(
        'SITE_URL must be the public HTTPS origin, without a path, credentials, query, or fragment.',
      );
    }
    siteUrl = url.origin + '/';
  }
  if (env.SITE_INDEXING && !['true', 'false'].includes(env.SITE_INDEXING)) {
    throw new Error('SITE_INDEXING must be true or false.');
  }
  const productionBranch = env.PRODUCTION_BRANCH || 'main';
  const preview =
    env.CF_PAGES === '1' && env.CF_PAGES_BRANCH !== productionBranch;
  const indexable =
    env.SITE_INDEXING === 'true' && !preview && env.NODE_ENV !== 'development';
  if (indexable && !siteUrl) {
    throw new Error('An indexable release requires SITE_URL.');
  }
  return { siteUrl, indexable };
}

/** @param {boolean} indexable */
export function deploymentHeaders(indexable) {
  return `/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
${indexable ? '' : '  X-Robots-Tag: noindex, nofollow\n'}
/404.html
  X-Robots-Tag: noindex, follow

/_astro/*
  Cache-Control: public, max-age=31536000, immutable
`;
}
