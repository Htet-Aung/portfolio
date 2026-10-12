# Phase 3 release preparation

Authorized by Htet on 2026-10-11. Release preparation is implemented and locally verified. Actual publication remains pending the hosting/account choice and access; no production domain was invented and no public deployment was made.

## Implemented

- Canonical and Open Graph URLs from an explicit public `SITE_URL`, full Twitter/social-card metadata, and a 1200×630 PNG exported from editable SVG typography.
- Minimal homepage Person/WebSite structured data using the documented identity, Singapore location, and GitHub profile; no invented role, employer, award, or education dates.
- Generated sitemap for the seven content routes and matching robots rules. The 404 page stays unindexed and out of the sitemap.
- Explicit production indexing, with local development and Cloudflare preview branches unindexed. Invalid or missing public origins fail an indexable build. Preview headers include `X-Robots-Tag`.
- Generated Cloudflare security/cache headers and documented deployment settings. Hashed Astro assets receive immutable caching; HTML does not receive an excessive cache lifetime.
- Keyboard-focusable, labeled code regions so the NumPyGrad example can scroll without widening a phone layout.
- Deployment-rule tests and a GitHub Actions workflow covering formatting, diagnostics, artifact checks, and separate production/preview fixtures. Artifact validation now checks unique metadata, social cards, structured data, image descriptions/dimensions, indexing, sitemap/header agreement, and JS/CSS size budgets.

The compact homepage hero and existing page layouts were preserved. No new framework, visitor service, analytics, cookies, runtime AI calls, or remote fonts were added. Sharp is an explicit development dependency for the local social-image export.

## Verification

Local, production, and inherited-preview artifacts were built and checked. Production and preview fixtures use `https://example.com` solely as test data under ignored `.local/phase-3/`; they are not deployable public addresses and were not uploaded.

- Deployment rules: 4 tests passed, including invalid origin settings, required origin for indexing, Cloudflare preview inheritance, development override, and preview/404 response headers.
- Default build: 8 HTML pages and 199 internal link/asset references. Configured-origin fixtures: 206 references, with exactly seven sitemap/canonical entries. Metadata, structured data, robots, social-image dimensions, and header checks passed.
- Largest per-page custom JavaScript: **401 bytes gzip**; linked CSS: **6,685 bytes gzip**, within the 30 KiB / 20 KiB budgets.
- Production-fixture Lighthouse audits: homepage (mobile), all four cases, About, and Resume (desktop) each scored **100 accessibility, 100 best practices, and 100 SEO**. No failed audits on those seven content pages. Preview `noindex` remains intentional.
- Native Chrome DevTools smoke checks: all eight routes at 375 CSS pixels with JavaScript disabled; native disclosure opens by keyboard; resume hides its script-dependent print button and exposes browser-print guidance. All eight routes also passed reduced-motion and 640/320 CSS pixel reflow checks, equivalent to 200%/400% reflow from a 1280-pixel viewport. Wide code scrolls with the keyboard; unknown paths return real HTTP 404 and recovery content. **26 checks plus 404 recovery passed.**
- Accessibility-tree inspection confirmed the About page's readable headings and navigation. This is a structural inspection, not a claimed auditory screen-reader session or WCAG certification.
- The phase 2 one-page Chrome A4 print result remains applicable because resume content and print layout were unchanged.

Lighthouse **13.5.0 mobile performance** tests against the local release fixture, using Lighthouse's standard simulated mobile conditions:

| Page | Performance | LCP | CLS | Total blocking time |
| --- | --- | --- | --- | --- |
| Home | 100 | 1.511 s | 0.0034 | 0 ms |
| NumPyGrad | 100 | 1.512 s | 0.0011 | 0 ms |

These are local lab results. Public CDN/network behavior and field INP have not yet been measured. Reports and browser-smoke results are ignored under `.local/phase-3/`; production HTTP checks must follow deployment.

## Remaining launch input

Choose or connect the hosting account and identify the actual public origin. Cloudflare Pages with a free `pages.dev` address is the planned default; a purchased domain is optional. No extra project details, education dates, LinkedIn, portrait, standalone PDF, videos, or screenshots are required to launch this version.

After host access is available, publish the verified implementation, set the production build variables, and check the real routes, HTTP headers, crawler files, social card, contact/source links, and mobile/keyboard/screen-reader behavior on the public site. See [deployment.md](deployment.md) for exact settings. The local and fixture results do not establish that the site is already live.
