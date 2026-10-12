# Portfolio site plan

**Status:** Planning draft, 2026-10-02. No site implementation is authorized by this document.  
**Owner:** Htet Aung Khant  
**Source material:** [portfolio.md](portfolio.md), [resume.md](resume.md), and the existing README. Those files are source notes, not approved public copy. Track publication checks in [content-evidence.md](content-evidence.md).

## 1. Purpose and positioning

Build a personal portfolio that helps an engineering recruiter assess fit in under a minute and lets an engineer inspect real decisions, ownership, and evidence in a few minutes. The intended first audience is software engineering hiring teams, with applied AI teams as a close second. Client or freelance marketing is outside the first release.

**Proposed positioning:** “I build useful software and the systems behind it.” Supporting copy should say that Htet is a Singapore-based engineer working across full-stack products and applied AI. Do not imply a current job title, degree completion date, or employment history that the source notes do not establish.

The portfolio should demonstrate four things: breadth across frontend, backend, and ML; specific personal contribution; engineering reasoning; and observable outcomes. Give projects more space than a skills list. Lead with NumPyGrad as the strongest solo systems artifact, then Shades of SG, ROLLOVER, and SGEN. Reorder after reviewing target job applications or stronger evidence.

## 2. User journeys and success criteria

| Visitor | Primary question | Fast path | Deeper path |
| --- | --- | --- | --- |
| Recruiter | What does Htet build, and how can I contact him? | Hero → four project summaries → resume/contact | One case study → resume |
| Engineer or hiring manager | What did he personally design, and why? | Project card → case study summary/ownership/outcomes | Architecture → decisions → source/demo |
| Applied AI team | Is there evidence of ML systems work? | NumPyGrad feature → metrics → repository | Autograd mechanism, tests, trade-offs |

**Launch success is qualitative until real traffic exists:** a reviewer can identify role focus, open any of four projects, distinguish individual work from team work, and find a working contact method without guidance. After launch, measure these with a short five-person usability review and optional privacy-friendly aggregate analytics. No speculative conversion target is required.

## 3. Release scope

### V1 pages and routes

| Route | Purpose | Required content |
| --- | --- | --- |
| `/` | First impression and work index | Hero, short proof strip, four project cards, about preview, contact footer |
| `/work/numpygrad/` | Solo systems case study | Autograd, vectorized convolution, studio, tests/results, trade-offs |
| `/work/shades-of-sg/` | Media pipeline case study | Five phases, review state, chorus reuse, editor/player, explicit team ownership |
| `/work/rollover/` | Hackathon case study | 24-hour context, matching/reveal protocol, UI, team attribution, media when available |
| `/work/sgen/` | Accessible social platform case study | Feed, language tools, safety layer, exact contribution, trade-offs |
| `/about/` | Human context and capabilities | Short bio, focus, education, curated skills, working approach, contact |
| `/resume/` | Scan-friendly CV | HTML resume based on reviewed source; PDF download only when a current approved PDF exists |
| `404` | Recovery | Clear message and links home/work |

Home navigation: **Work** (home `#work`), **About**, **Resume**, **Contact** (`mailto:` or footer contact section). On case-study pages, Work returns to `/#work`. The logo/name returns home. The footer repeats email and GitHub. Add LinkedIn only after Htet supplies and approves a URL.

### V1 features

- Four edited case studies, each with a quick scan section and an optional technical deep dive in the same page.
- Responsive layouts, keyboard access, reduced-motion support, accessible media descriptions, and visible focus states.
- Real screenshots or diagrams where assets are available; typographic project covers are acceptable until authentic visuals are collected.
- Per-page SEO metadata, social preview image, sitemap, and meaningful page titles.
- Copyable email link and direct GitHub/repository links where confirmed.

### Later, only if useful

Interactive demos, a writing/blog section, project filters, a CMS, theme switcher, analytics dashboards, animated 3D scenes, and a contact form. None is needed to prove the initial portfolio. Add each only against a concrete visitor need.

## 4. Information hierarchy and page copy plan

### Home

1. **Header:** name/mark, Work, About, Resume, Contact.
2. **Hero:** one sentence about what Htet builds; one shorter line for role/location; primary “Explore work” action and secondary “View resume” action. Avoid a rotating title or generic adjective list.
3. **Proof strip:** three concise, attributable facts, e.g. “Pure NumPy autograd,” “Media generation pipeline,” “24-hour product build.” Use measured numbers only after evidence review.
4. **Selected work:** all four projects in the agreed order. Each card shows title, one-line problem/result, personal role, 2–4 relevant technologies, a genuine image or designed text cover, and a clear “Read case study” link. Team size appears when relevant.
5. **About preview:** 2–3 sentences about engineering focus and a link to About.
6. **Contact band/footer:** email and GitHub; optional resume download only when the PDF is ready.

**Draft copy for visual review:**

| Element | Proposed text |
| --- | --- |
| Hero eyebrow | `Singapore · Software engineering + applied AI` |
| Hero headline | `I build useful software and the systems behind it.` |
| Hero support | `I'm Htet Aung Khant. I work across full-stack products, media workflows, and machine learning systems.` |
| Main actions | `Explore my work` · `View resume` |
| Work heading | `Selected work` |
| NumPyGrad card | `A deep learning engine built from first principles in NumPy.` |
| Shades of SG card | `A media workflow that turns heritage music into editable visual stories.` |
| ROLLOVER card | `A 24-hour team build for constraint-safe surplus mystery bundles.` |
| SGEN card | `An accessible social feed with multilingual and safety tools.` |
| Contact heading | `Have a role or project in mind?` |
| Contact action | `Email me` |

These lines are editorial starting points. Verify the level of personal ownership and the phrase “machine learning systems” with Htet before publishing.

### Case study template

1. Breadcrumb/back to work; title and one-sentence outcome.
2. At-a-glance metadata: role, collaboration, period if confirmed, stack, source/demo links.
3. **The short version:** problem, personal contribution, outcome, 3–5 lines total. This must stand alone for a recruiter.
4. Context and constraints, including team attribution for shared work.
5. System flow or architecture diagram with a text alternative.
6. Two or three engineering decisions in problem → approach → why → result format.
7. Evidence: screenshots, demo, code links, metrics with method and source. If a metric is unverified, omit the number from public copy or label it as an estimate with context.
8. Trade-offs and what would change next.
9. Next project/contact action. Avoid an endless list of technologies.

Each case study should aim for roughly 700–1,200 edited words, with a 100–150 word quick summary. Prefer clear diagrams and short paragraphs over pasting the full internal knowledge base. Longer technical appendices are acceptable for NumPyGrad if navigation remains easy.

### About and resume

About should introduce Htet as a person and engineer without a fabricated backstory. Include the Diploma in Applied AI & Analytics at Nanyang Polytechnic as recorded in [resume.md](resume.md); confirm dates and completion status before publication. Show 3–4 capability groups tied to specific projects, then a direct contact action.

The HTML resume should have contact, short profile, selected projects with concise evidence, skills, education, and verified honors. Treat [resume.md](resume.md) as a bullet bank, not public page copy. A PDF link appears only after a reviewed PDF is provided or generated from approved content.

## 5. Project editorial map

| Project | Primary story | Show first | Evidence/attribution requirement |
| --- | --- | --- | --- |
| NumPyGrad | Built a deep learning engine from first principles | Dynamic autograd graph, vectorized convolution, 152-test suite and MNIST result if validated | Link to repository; cite benchmark/test conditions for numerical claims; real studio capture or diagram |
| Shades of SG | Made generation and editing a coherent media workflow | Five-phase pipeline, `AWAITING_REVIEW`, chorus reuse, timeline/player | Explicitly list Htet-owned modules; avoid crediting teammate-owned auth, dashboard, games; verify cost reduction claim and source/demo access |
| ROLLOVER | Delivered constrained mystery bundles in a 24-hour team sprint | Deterministic match/reveal, UI interactions, team context | Credit equal 3-person team; replace existing `#` video placeholders; check finalist wording and latency/zero-failure claims |
| SGEN | Built accessible feed and assistive layers | Async posts/feed, speech tools, slang/link controls | Confirm repository/demo and exact team boundary; substantiate performance or universal safety claims |

**Editorial rule:** distinguish “I built” from “we built.” Do not claim a customer impact, performance guarantee, or 100% outcome without a measurement method. For project visuals, use captures of real work, labeled diagrams, or explicitly decorative covers; do not present generated mockups as product screenshots.

## 6. Content and asset inventory before publication

| Item | Current state | Needed for launch |
| --- | --- | --- |
| Name, email, GitHub, location | Present in [resume.md](resume.md) | Confirm current and consent to publish |
| Four case-study source drafts | Present in [portfolio.md](portfolio.md) | Condense/edit; review ownership and claims |
| NumPyGrad repository | URL present | Check public URL and select code/test links |
| ROLLOVER repository | URL present | Check public URL and permission to show team work |
| SGEN and Shades repositories/demos | No confirmed public URLs in this repo | Obtain approved URLs or omit buttons |
| ROLLOVER videos | Described; current links are placeholders | Obtain actual files/hosted URLs and poster/thumbnail; otherwise omit media section |
| Project screenshots | Not stored here | Collect 1 authentic lead image per case study, plus optional supporting captures; include alt text and usage rights |
| Portrait | Not stored here | Optional; site can launch without one |
| Current one-page PDF resume | Not stored here | Obtain/review before showing Download PDF |
| LinkedIn, custom domain, dates | Not documented | Optional URL/domain; dates required only if shown |

## 7. Decisions for owner review

The planning baseline assumes **engineering recruiters**, an **editorial/technical visual direction**, and **four polished case studies** at launch. These were chosen from current content and should be updated with Htet’s preferences. Also confirm: desired role emphasis (general SWE vs applied AI), light/dark preference, whether a portrait is wanted, which repository/demo URLs may be public, and whether the resume needs a downloadable PDF at V1.

## 8. Definition of ready to build

Planning is complete when Htet accepts the audience, sitemap, visual direction, stack, and V1 scope; each public claim has an evidence decision; missing media has an owner or an approved fallback; and the page outlines are specific enough to implement without inventing content. This is a planning gate, not permission to start coding.
