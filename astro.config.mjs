import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { writeFile } from 'node:fs/promises';
import {
  getDeployment,
  deploymentHeaders,
} from './scripts/deployment-config.mjs';

const deployment = getDeployment();

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  site: deployment.siteUrl,
  integrations: [
    mdx(),
    {
      name: 'static-deployment-headers',
      hooks: {
        'astro:build:done': async ({ dir }) => {
          await writeFile(
            new URL('_headers', dir),
            deploymentHeaders(deployment.indexable),
          );
        },
      },
    },
  ],
  devToolbar: { enabled: false },
});
