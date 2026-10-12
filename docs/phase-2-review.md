# Phase 2 local review

Authorized by Htet on 2026-10-10. Phase 2 is complete for its local implementation scope: all four case studies, dedicated About and HTML Resume pages, available authentic media, and responsive integration.

## Review routes

Run `npm.cmd run dev` and open `http://localhost:4321/`.

- `/work/numpygrad/`
- `/work/shades-of-sg/`
- `/work/rollover/`
- `/work/sgen/`
- `/about/`
- `/resume/`

The resume's Print / save PDF control uses the browser print dialog. The print stylesheet removes the site shell and fits the edited content onto one A4 page in Chrome. Browser printing remains available without JavaScript, with a visible noscript instruction.

## Implemented

The three new MDX narratives follow the existing case-study structure and distinguish Htet's role from team deliverables. Source links are shown when confirmed; Shades of SG has no source control because a public URL is still unavailable. Each case ends with the next project, cycling NumPyGrad → Shades of SG → ROLLOVER → SGEN → NumPyGrad.

About adds background, education, capabilities linked to concrete project evidence, and working approach. Resume uses concise project bullets and skills from a typed data module; school/program are included without inventing education dates or completion status. Header and footer links connect the new pages, About/Resume have active navigation states, and all three homepage proof-strip items now link to their case studies.

NumPyGrad includes three authentic repository screenshots, optimized into responsive WebP variants, with alt text, captions, original-source links, and the MIT license. Other project covers remain decorative SVG/CSS artwork. Media sources and factual corrections are recorded in [content-evidence.md](content-evidence.md) and [media attribution](../public/media/README.md).

Verified SGEN code uses page-number requests, a scroll listener, in-flight guard, post-ID deduplication, and `LIMIT`/`OFFSET`, rather than the cursor/observer implementation described in earlier notes. The research documents and public copy now reflect that. Async handlers are described without a worker-throughput guarantee. ROLLOVER is clearly identified as an illustrative retail prototype; named demo brands are not presented as partners.

## Verification

- Astro check: 0 errors, 0 warnings, 0 hints. Production build: 8 pages. Formatting passes.
- Built-output validation: 183 internal links/assets checked; no missing destinations, duplicate IDs, or placeholder links.
- All eight built routes checked at 320×740, 375×812, 768×600, 1024×600, 1280×609, and 1440×900 viewports, with no page-wide horizontal overflow. The existing NumPyGrad code example scrolls inside its own code block on narrow phones.
- Homepage project covers still start at approximately 536 pixels on the 1280×609 short desktop viewport, preserving the phase 1 correction.
- About/Resume active navigation states, the full next-project cycle, native mobile menu Enter/Tab/Escape behavior, and focus restoration checked in the browser.
- Print button invokes browser printing; actual headless Chrome A4 export contains one page. The local verification PDF is ignored under `.local/phase-2/` and is not a published resume asset.
- All three optimized gallery images loaded and decoded successfully, with descriptive alt text. NumPyGrad console had no errors or warnings.
- Lighthouse About (mobile), Resume (desktop), and NumPyGrad with gallery (desktop): accessibility 100, best practices 100. Their only failed audit is `is-crawlable`, due to intentional local-review `noindex`. Automated audits complement the later screen-reader and browser review.

## Phase 3 inputs

Review final wording and identity details, supply any desired cleared team screenshots/video URLs, confirm education dates if wanted, and choose the production domain/host. A separately hosted resume PDF can follow owner review; browser Save as PDF works now. Launch work covers final accessibility/performance review, SEO and social previews, indexing, and deployment. No production release was performed in phase 2. Numerical benchmark and impact claims remain omitted pending current evidence.
