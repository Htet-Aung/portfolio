# Technical specification: portfolio website

**Status:** Architecture plan from 2026-10-02, implemented through phase 3 release preparation on 2026-10-11. Actual hosting remains pending; see [deployment.md](deployment.md) and [phase-3-review.md](phase-3-review.md).  
**Related:** [site-plan.md](site-plan.md) defines what to build; [design-spec.md](design-spec.md) defines how it should look and behave.

## 1. System summary

A content-led, mostly static site with seven content routes: home, four case studies, About, and Resume. At build time, authored project content and metadata become pre-rendered HTML. The only browser JavaScript anticipated for V1 is a small mobile navigation control, if CSS-only behavior does not meet accessibility needs. There is no visitor account, database, contact-form service, API, or runtime AI call.

```text
Edited Markdown/MDX + typed project metadata + licensed media
                    │
                    ▼
             Astro static build
                    │
                    ├── HTML/CSS for routes
                    ├── resized responsive images
                    ├── sitemap / robots / metadata
                    └── static PDF when approved
                    │
                    ▼
           Cloudflare Pages CDN
                    │
                    ▼
          Browser → mailto / GitHub / demos
```

The internal knowledge files in this repository are research inputs. Public pages should be edited copies with source links and an explicit review step; the site build should not render `docs/portfolio.md` or `docs/resume.md` verbatim.

## 2. Stack and decisions

| Layer | Decision | Reason | Trade-off |
| --- | --- | --- | --- |
| Framework | Astro in static output mode | Generates fast, indexable content pages with little client JS; supports content collections and MDX | Less natural than a full React app for highly interactive demos, which are out of V1 scope |
| Language | TypeScript in strict mode | Keeps project metadata/routes consistent | Some schema/setup cost |
| Content | Astro content collections with MDX for long case studies | Versioned in Git, close to the existing Markdown drafts, supports reusable callouts/diagrams | Editing requires Git rather than a browser CMS |
| Styling | CSS custom properties plus Astro scoped styles and one global token stylesheet | Small dependency surface and precise responsive control | Requires manual component styling; no utility framework |
| Images | Astro image pipeline for local raster assets; hand-authored SVG for simple diagrams | Responsive sizes and modern formats without a remote image service | Original media must be collected/cleared first |
| Fonts | Self-hosted Inter and IBM Plex Mono, with system fallbacks | Consistent type and no runtime third-party font request | Adds font assets; subset and license checks needed |
| Hosting | Cloudflare Pages from GitHub, static deploy | Preview builds, HTTPS, CDN, custom-domain support | Requires Cloudflare account and final domain decision |
| Source control / checks | GitHub PRs and Actions for type check, content checks, build, link checks, and accessibility smoke test | Catches broken pages before publish | Some CI setup/maintenance |

Use the current stable releases at implementation time, commit a lockfile, and record exact versions in the package manifest. Do not lock a 2026 package version in this plan without installing and testing it. React/Next.js, Tailwind, CMS, database, and analytics are unnecessary for the stated V1 feature set; revisit only if requirements change.

### Architecture decision records

**ADR-01 — Static generation:** Case studies change infrequently and need SEO. Pre-render all routes. If later interactive demos are embedded, use isolated client islands on those pages rather than turning the site into an SPA.

**ADR-02 — Git-owned content:** The owner can review changes with a diff and keep historical evidence close to copy. The content collection schema prevents missing role, summary, image alt, or links from quietly reaching production.

**ADR-03 — Direct contact:** Use a `mailto:` link and published GitHub profile in V1. This avoids storing visitor data or operating a form endpoint. Add a form only if real contact needs justify spam handling, retention, and privacy copy.

**ADR-04 — Hosting:** Plan for Cloudflare Pages because static previews and CDN fit this site. A final domain and account connection are launch inputs; the build itself remains host-portable.

## 3. Planned repository shape

This is a target structure for a later implementation, not a request to create it now.

```text
src/
  content/work/            # Four edited MDX case studies
  content.config.ts         # Validated content schema
  components/               # Header, ProjectCard, Evidence, Diagram, Footer…
  layouts/                  # Site and case-study shells
  pages/                    # index, about, resume, work/[slug], 404
  styles/                   # tokens, global, print
  data/                     # Site identity, navigation, optional resume data
public/
  media/                    # Approved originals/posters not processed by Astro
  files/                    # Approved resume PDF when available
docs/                       # Existing knowledge base plus planning documents
```

Prefer local image imports in `src/assets/` for images that need Astro transforms. Keep original screenshots, licenses, attribution, and export settings documented. Do not commit huge raw videos if an approved external host is used; publish poster/transcript locally and link/embed a verified hosted URL.

## 4. Content contract

Each work entry must validate at build time against a schema similar to:

| Field | Required? | Rule |
| --- | --- | --- |
| `title`, `slug`, `summary` | Yes | Short, unique, human-readable; slug matches route |
| `role`, `teamContext` | Yes | Explicit personal attribution, including solo/team status |
| `category`, `stack` | Yes | Small curated list, not every dependency |
| `order` | Yes | Unique display order for four projects |
| `heroMedia` and `heroAlt` | Conditional | Genuine image with useful alt, or a declared decorative typographic cover |
| `repoUrl`, `demoUrl`, `videoUrl` | Optional | Valid public HTTPS URL; no `#` placeholders |
| `period`, `metrics` | Optional | Publish only when confirmed; metric includes method/source/context |
| `status` | Yes | `draft` or `published`; drafts excluded from production routes |

The MDX body uses the case-study structure in [site-plan.md](site-plan.md). Frontmatter or data files carry only structured metadata; the narrative stays in MDX. A project card and case-study header read from the same entry to prevent divergent role/stack copy. Add a build check that fails for duplicate slugs, missing referenced media, dead internal links, and placeholder external URLs.

## 5. Routing and metadata

- Generate `/work/[slug]/` only for published entries. Keep one trailing-slash policy across internal URLs, canonical tags, and sitemap.
- Home title: “Htet Aung Khant — Software Engineer & Applied AI Projects” or revised title after positioning review. Each case study gets a unique title and 140–160-character description based on its actual summary.
- Add canonical URLs only after the public domain is chosen. Generate `sitemap.xml` and `robots.txt`; do not index previews.
- Provide Open Graph/Twitter card metadata and a reusable default social image; use a project image where rights and crop are suitable.
- Add minimal valid `Person` structured data with confirmed name, location, public profile, and works. Do not add unsupported job title, organization, award, or rating claims.
- A 404 page gives a home route and work links. No client-side routing or search is needed.

## 6. Performance, accessibility, and privacy targets

| Area | Target and verification |
| --- | --- |
| Loading | LCP ≤ 2.5s, CLS ≤ 0.1, INP ≤ 200ms on representative mobile test; Lighthouse performance ≥ 90 as a guide, not a substitute for real device checks |
| Images | Width/height set; responsive `srcset`, WebP/AVIF where appropriate; lead image prioritized, below-fold images lazy; no oversized originals served |
| JavaScript | Static HTML first; target ≤ 30 KB gzip of custom/site JS on initial page, ideally far less |
| Fonts | Self-host, subset if practical, use `font-display: swap`; avoid hidden text while loading |
| Accessibility | WCAG 2.2 AA intent: semantic headings/landmarks, keyboard path, focus, contrast, text zoom, reduced motion, alt/captions; manual screen-reader review |
| Privacy | No cookies, tracking, form collection, or remote font requests in V1. If analytics is later enabled, document provider and privacy impact first |
| Security | No secrets in the client bundle; external `target="_blank"` links use `rel="noopener noreferrer"`; use host HTTPS and security headers compatible with static assets |

Targets are acceptance criteria for the later build, not claims about a site that does not yet exist. Use WebPageTest/Lighthouse and browser checks on preview deployments to validate them.

## 7. Build, review, and release workflow

1. Review this plan and resolve owner decisions in [site-plan.md](site-plan.md).
2. Resolve the existing [content-evidence.md](content-evidence.md) register for public metrics, ownership, and URLs; edit final copy and gather authentic assets.
3. Create one home and one case-study visual prototype for sign-off, then implement reusable tokens/components.
4. Scaffold Astro and implement routes/content collections; use one case study as the template proof, then populate the remaining three.
5. Add HTML resume/About, responsive polish, SEO, print style, and media handling.
6. Run local/CI checks; review preview deployment with real devices; correct issues; approve production publishing as a separate release step.

For implementation PRs, CI should run formatting, Astro/TypeScript check, production build, internal link/asset validation, and focused accessibility smoke tests. Manually review all four case studies for factual claims, attribution, layout at defined widths, keyboard navigation, and media rights. Verify contact and external URLs immediately before launch.

## 8. Acceptance checklist

- [ ] Owner approves audience, visual direction, page map, stack, and V1 scope.
- [ ] Four case studies have edited public copy with accurate personal/team ownership.
- [ ] Every displayed number has a source/method or has been removed/qualified.
- [ ] Every visible repo/demo/video link works; placeholders are absent.
- [ ] Authentic images have rights, alt text, responsive sizing, and captions where useful.
- [ ] Resume content is reviewed; PDF link exists only if a current PDF exists.
- [ ] Every route renders, has unique metadata, appears in sitemap as intended, and works without client JS except optional menu enhancement.
- [ ] Mobile, zoom, keyboard, reduced-motion, and screen-reader review finds no blocking issue.
- [ ] Performance budgets are checked on a preview build; contact path works.

## 9. Risks and open inputs

**Content accuracy is the principal risk.** Existing internal documents include numerical and absolute claims but this repository does not contain primary test artifacts for all of them. Treat each as a draft until backed by code, logs, recordings, or the owner’s review. **Visual evidence is the second risk.** Real screenshots, video URLs, and a current PDF are absent or incomplete. Typographic covers and omission of unavailable media are acceptable fallbacks; invented screenshots are not.

The domain, Cloudflare account, exact public links for SGEN/Shades, permission for team screenshots, final font asset versions, and the desired role emphasis remain owner inputs. None blocks writing the plan or making a local prototype later; publishing waits for the applicable approvals and assets.
