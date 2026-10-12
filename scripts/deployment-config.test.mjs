import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getDeployment, deploymentHeaders } from './deployment-config.mjs';

test('local builds remain unindexed without a domain', () => {
  assert.deepEqual(getDeployment({}), { siteUrl: undefined, indexable: false });
});
test('a release needs a valid public HTTPS origin and explicit indexing', () => {
  assert.throws(
    () => getDeployment({ SITE_INDEXING: 'true' }),
    /requires SITE_URL/,
  );
  for (const SITE_URL of [
    'http://example.com',
    'https://localhost',
    'https://example.com/portfolio/',
    'https://user:pass@example.com',
    'https://example.com/?secret=1',
    'https://example.com/#work',
  ]) {
    assert.throws(() => getDeployment({ SITE_URL }), /public HTTPS origin/);
  }
  assert.throws(() => getDeployment({ SITE_INDEXING: 'yes' }), /true or false/);
  assert.deepEqual(
    getDeployment({ SITE_URL: 'https://example.com', SITE_INDEXING: 'true' }),
    { siteUrl: 'https://example.com/', indexable: true },
  );
});
test('Cloudflare preview branches stay unindexed even if indexing is inherited', () => {
  const env = {
    SITE_URL: 'https://example.com',
    SITE_INDEXING: 'true',
    CF_PAGES: '1',
  };
  assert.equal(getDeployment(env).indexable, false);
  assert.equal(
    getDeployment({ ...env, CF_PAGES_BRANCH: 'feature' }).indexable,
    false,
  );
  assert.equal(
    getDeployment({ ...env, CF_PAGES_BRANCH: 'main' }).indexable,
    true,
  );
  assert.equal(
    getDeployment({
      ...env,
      CF_PAGES_BRANCH: 'release',
      PRODUCTION_BRANCH: 'release',
    }).indexable,
    true,
  );
  assert.equal(
    getDeployment({ ...env, CF_PAGES_BRANCH: 'main', NODE_ENV: 'development' })
      .indexable,
    false,
  );
});
test('only preview output applies a global noindex response header', () => {
  assert.match(deploymentHeaders(false), /X-Robots-Tag: noindex, nofollow/);
  assert.doesNotMatch(
    deploymentHeaders(true),
    /X-Robots-Tag: noindex, nofollow/,
  );
  assert.match(
    deploymentHeaders(true),
    /\/404.html\n  X-Robots-Tag: noindex, follow/,
  );
});
