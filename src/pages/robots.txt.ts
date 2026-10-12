import type { APIRoute } from 'astro';
import { getDeployment } from '../../scripts/deployment-config.mjs';

export const GET: APIRoute = () => {
  const { siteUrl, indexable } = getDeployment();
  const body = indexable
    ? `User-agent: *\nAllow: /\nDisallow: /404.html\n\nSitemap: ${siteUrl}sitemap.xml\n`
    : 'User-agent: *\nDisallow: /\n';
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
