import type { APIRoute } from 'astro';
import { getPublishedProjects } from '../data/work';
import { getDeployment } from '../../scripts/deployment-config.mjs';

export const GET: APIRoute = async () => {
  const { siteUrl } = getDeployment();
  const work = await getPublishedProjects();
  const routes = [
    '/',
    '/about/',
    '/resume/',
    ...work.flatMap(({ caseStudy }) => (caseStudy ? [caseStudy] : [])),
  ];
  const urls = siteUrl
    ? routes
        .map((route) => `<url><loc>${new URL(route, siteUrl).href}</loc></url>`)
        .join('')
    : '';
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    {
      headers: { 'Content-Type': 'application/xml; charset=utf-8' },
    },
  );
};
