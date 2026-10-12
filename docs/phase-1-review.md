# Phase 1 local review

Implementation authorized by Htet on 2026-10-10. This phase establishes the homepage and one NumPyGrad case study for visual review.

## Review routes

- Home: `http://localhost:4321/`
- NumPyGrad: `http://localhost:4321/work/numpygrad/`
- Recovery page: `http://localhost:4321/404.html`

Run `npm.cmd run dev` from the repository root. See the README for installation and validation commands.

## Implemented

Astro static output with strict TypeScript, an MDX content collection, and a shared HTML shell. The homepage contains the planned hero, four project summaries, About preview, and contact footer. NumPyGrad has an edited case study, training-loop diagram, source links, and responsive contents navigation. Published case-study metadata supplies the matching card's title, role, stack, source URL, and route; draft entries do not create case-study links.

The visual system follows the proposed warm canvas, ink typography, blue accent, and locally bundled Inter/IBM Plex Mono fonts. Covers are decorative SVG/CSS diagrams or typography. Their artwork is hidden from assistive technology, while project names and descriptions remain visible and readable. Font licenses are included in `public/fonts/`.

The mobile menu is a native disclosure, with a small script for Escape, focus restoration, outside clicks, and closing after navigation. Site content, section links, and the disclosure's native open/close behavior remain available without JavaScript. Print and reduced-motion styles are included.

## Verification

- Astro/TypeScript diagnostics, production build, formatting, and built HTML/link/asset validation.
- Browser layout checks on both content routes at 320, 375, 768, 1024, and 1440 CSS pixels; no page-wide horizontal overflow.
- Mobile menu keyboard open, Tab into navigation, Escape close, and focus restoration.
- Final Lighthouse audits: homepage (mobile) and NumPyGrad (desktop) both scored 100 for accessibility and 100 for best practices. The only remaining audit failure is intentional indexing prevention (`noindex`); the SEO score is 60 until release preparation enables indexing. These automated audits do not replace the launch-stage screen-reader review.
- Public NumPyGrad and ROLLOVER repository URLs are reachable. NumPyGrad gradient-check, autograd, convolution, and navigation-study source paths were checked against the article.
- Final Astro check: 0 errors, 0 warnings, 0 hints. Production build generated 3 pages. Built-output validation checked 46 internal link/asset references with no missing destinations, duplicate IDs, or placeholder links. Formatting passed.
- Homepage browser console was free of warnings/errors. An unknown route returned HTTP 404 with the recovery page and a working home link.

## Next review

Review typography, color, spacing, project-cover treatment, and how much technical detail belongs in the case study before phase 2. Standalone About/Resume pages and the other three case studies are outside this phase.

Numerical claims are deliberately omitted from the edited pages pending the evidence review in `content-evidence.md`. Authentic screenshots, final resume details/PDF, remaining approved public URLs, and the production domain are still launch inputs. This local build has `noindex` metadata; canonical URLs, sitemap, and social preview imagery belong to release preparation.

## Desktop viewport correction — 2026-10-10

Htet's screenshot showed that the introductory section occupied almost the entire visible page. Earlier layout checks covered widths but used tall viewports. Removed the forced third headline line and redundant scroll footnote, reduced header/section spacing, allowed action links to wrap, and made headline sizing respond to viewport height. Short desktop viewports get a compact spacing treatment without hiding content or restricting scrolling.

At 1280 × 609 CSS pixels, the hero height decreased from approximately 605 to 264 pixels. The Selected work heading ends at approximately 512 pixels and project covers begin at 536 pixels, both within the initial viewport. Desktop checks at 768 × 600, 1024 × 600, 1280 × 720, 1366 × 768, 1440 × 900, and 1920 × 1080 also showed the beginning of the project covers. Mobile checks at 320 and 375 pixels found no horizontal overflow. Astro diagnostics, build, internal destination verification, and formatting passed after the correction.

Phase 1 implementation is complete for its agreed scope: homepage, one case study, shared components, and local verification. Phase 2 adds the three remaining case-study routes, standalone About and HTML Resume pages, reviewed media where available, and responsive integration. Phase 3 handles final polish, launch accessibility/performance review, SEO, and release preparation.
