# Deploy the portfolio

Phase 3 release preparation is implemented. Hosting/account selection is still needed for the actual public deployment. The planned default is Cloudflare Pages with a free `pages.dev` address; a custom domain is optional. The build contains static files and requires no application server, database, AI credentials, or paid API service.

## Cloudflare Pages settings

Connect `Htet-Aung/portfolio` after the implementation files have been committed and pushed, then configure:

| Setting | Value |
| --- | --- |
| Framework preset | Astro, or None with the settings below |
| Root directory | Repository root |
| Build command | `npm run build && npm run verify` |
| Output directory | `dist` |
| Node version | `NODE_VERSION=24` |
| Production branch | The branch selected for publishing |

Set these **production build** variables after obtaining the actual Pages URL or connecting a custom domain:

| Variable | Value |
| --- | --- |
| `SITE_URL` | The real public HTTPS origin, for example your assigned `https://PROJECT.pages.dev`; no path, query, or fragment |
| `SITE_INDEXING` | `true` |
| `PRODUCTION_BRANCH` | The same branch selected in Cloudflare; defaults to `main` |

Set `SITE_INDEXING=false` for preview builds. Preview builds may use the production `SITE_URL` so their canonical links point to the real site. The code also forces Cloudflare branches other than `PRODUCTION_BRANCH` to remain unindexed even if they inherit `SITE_INDEXING=true`.

The repository currently uses `main`, which matches the default. If the publishing branch changes, update both the host setting and `PRODUCTION_BRANCH`.

`SITE_URL` is a build setting, not a runtime setting. Changing domains requires a rebuild. Configure it through the host environment or PowerShell environment variables; this project does not require a copied `.env` file. Never commit provider credentials.

## Build and inspect locally

Default local builds retain `noindex`, a crawler-blocking robots file, and no invented public URL:

```powershell
npm.cmd run format:check
npm.cmd test
npm.cmd run check
npm.cmd run build
npm.cmd run verify
npm.cmd run preview
```

For a real production build, set `SITE_URL` to the chosen public origin, `SITE_INDEXING=true`, and `PRODUCTION_BRANCH` to the publishing branch before running build/verify. `astro dev` always remains unindexed.

The build writes `robots.txt`, `sitemap.xml`, and Cloudflare `_headers`. Indexable output has canonical URLs for the seven content pages, a matching sitemap, an absolute social-image URL, and home-page Person/WebSite structured data. The 404 page stays unindexed and is excluded from the sitemap. Preview output applies a global `X-Robots-Tag: noindex, nofollow`; production output does not.

Headers include content-type sniffing protection, frame restrictions, referrer and permissions policies, and one-year immutable caching for content-hashed Astro assets. Cloudflare supplies HTTPS. The Astro preview server does not emulate Cloudflare `_headers`; verify their actual HTTP behavior on the deployed host.

## Checks before and after publication

The GitHub Actions workflow runs formatting, deployment-rule tests, type diagnostics, a static build, and artifact validation. It also builds separate production and inherited-preview fixtures using `https://example.com` solely as test data. Those fixtures are neither uploaded nor deployed. The checks reject missing internal destinations, duplicate metadata/IDs, placeholder links, missing image descriptions/dimensions, incorrect canonical/sitemap/robots/header combinations, and excessive CSS/JavaScript sizes.

After deployment, inspect the public origin, `/about/`, `/resume/`, all four `/work/` routes, an unknown URL returning 404, `/robots.txt`, `/sitemap.xml`, and `/social-card.png`. Confirm the response headers, canonical domain, sitemap entries, contact link, keyboard behavior, actual mobile layout, and social preview rendering. Inspect the production build for indexing and the preview deployment for `noindex`.

The launch review uses documented personal/team roles and omits unverified numerical claims. Extra videos, team screenshots, LinkedIn, portrait, and education dates can be added later. The HTML resume already supports one-page A4 printing; no separately supplied PDF is required for this version.

See [phase 3 verification](phase-3-review.md) for measured results and remaining host-dependent checks.
