# Htet Aung Khant – Portfolio

> **Repository Status:** `PHASE 3 — RELEASE PREPARATION`
> **Scope:** All portfolio pages are implemented, with production SEO, social previews, deployment headers, and automated release checks. Public deployment awaits the hosting/account choice. The project notes below are research inputs; public copy is edited separately in `src/`.

## Run locally

Node.js **22.12 or newer** is required. On Windows PowerShell, use `npm.cmd` if execution policy blocks `npm.ps1`.

```powershell
npm.cmd ci
npm.cmd run dev
```

Open [localhost:4321](http://localhost:4321/). Review [About](http://localhost:4321/about/), [Resume](http://localhost:4321/resume/), and the [NumPyGrad](http://localhost:4321/work/numpygrad/), [Shades of SG](http://localhost:4321/work/shades-of-sg/), [ROLLOVER](http://localhost:4321/work/rollover/), and [SGEN](http://localhost:4321/work/sgen/) case studies.

Data & Analytics adds [Hospital Operations](http://localhost:4321/work/hospital-operations/), [Retail Customer Analytics](http://localhost:4321/work/retail-data/), [Workout Energy Prediction](http://localhost:4321/work/workout-prediction/), and [Student Wellbeing Study](http://localhost:4321/work/student-wellbeing/). One resume presents four selected projects with concise bullets and four additional projects with short summaries and case-study links.

```powershell
npm.cmd run check
npm.cmd test
npm.cmd run build
npm.cmd run verify
npm.cmd run format:check
```

The site uses Astro static output, strict TypeScript, MDX content collections, scoped content metadata, and locally bundled Inter/IBM Plex Mono fonts. `src/data/site.ts` holds identity/contact details; `src/data/projects.ts` holds project summaries; `src/content/work/` holds case-study narratives. Decorative project covers are SVG/CSS diagrams and typography, not product screenshots.

Local and preview builds carry `noindex`. Production metadata uses the configured `SITE_URL`; explicitly enabling `SITE_INDEXING=true` produces canonical URLs, an eleven-page sitemap, crawler rules, social cards, and structured data. Cloudflare preview branches remain unindexed. See [deployment instructions](docs/deployment.md) for the host settings and release checks.

The single HTML resume supports browser printing and Save as PDF. NumPyGrad, owner-supplied Shades of SG screenshots, and 13 extracted analytics report figures are optimized locally by Astro; see `public/media/README.md` for attribution and the NumPyGrad MIT license. Software project covers are decorative, while analytics covers use authentic report figures. There are no runtime AI calls or external font requests. The social preview is authored SVG typography exported locally to PNG; run `npm.cmd run social:generate` after changing its source.

---

## Featured Projects

### NumPyGrad — Pure NumPy Autograd & Deep Learning Framework
**Creator & Sole Engineer — Deep Learning Engine Built from Scratch**

A lightweight, PyTorch-style deep learning framework and reverse-mode automatic differentiation engine engineered from first principles using pure Python and NumPy without external autograd dependencies.

* **Architecture & Technologies:** Python 3.10+, NumPy, Dynamic Computation Graphs, Vectorized `im2col`/`col2im`, Streamlit (4,800+ lines), Pytest (152 tests)
* **Core Engineering:**
  * **Zero-Dependency Autograd Core:** Built a dynamic computational DAG in pure Python/NumPy tracking Jacobian-vector product closures (`_backward`) with DFS topological ordering and thread-safe execution guards (`no_grad`).
  * **Broadcasting Reduction Calculus (`_unbroadcast`):** Implemented automated multi-dimensional tensor gradient shape normalization across broadcasted singleton and leading axes.
  * **Vectorized Spatial Convolutions (`Conv2D` & `MaxPool2D`):** Engineered fast 2D convolutional layers via `im2col` matrix unfolding and `col2im` gradient scattering in pure NumPy, eliminating Python loop overhead ($>40\times$ speedup).
  * **Comprehensive Layer & Optimizer Library:** Built `BatchNorm1d` (running EMA stats), `Dropout`, `CrossEntropyLoss` (log-sum-exp numerical stabilization), `AdamW` (decoupled weight decay), and single-file model persistence (`.ng` format).
  * **4,800+ Line Interactive Streamlit Studio:** Engineered 3 interactive views: 2D Decision Boundary Explorer, Autonomous Neural Pathfinding (Dijkstra potential fields), and Multi-Digit MNIST Canvas with connected-component segmentation.
  * **Empirical Benchmarks & Verification:** Passed 152 automated Pytest unit tests, achieved **98.04% test accuracy on MNIST** with custom CNN (52.1k params), verified gradients via finite differences ($\text{rel error} < 10^{-5}$), and executed a 60-classifier rover obstacle study.
* **Documentation:** [Detailed Technical Case Study](docs/portfolio.md#4-case-study-numpygrad--pure-numpy-autograd--deep-learning-framework) | [Resume Deliverables](docs/resume.md#numpygrad--pure-numpy-autograd--deep-learning-framework)

---

### ROLLOVER — Circular-Retail Gacha Arcade
**Full-Stack Engineer (Equal Team of 3) — Built in 24 Hours for SDG Open Hack 2026 (Challenge 2 / SDG 12)**

A rapid-prototyped circular-retail discovery platform that diverts stranded enterprise surplus stock into personalized, zero-guilt mystery bundles using arcade gamification, deterministic constraint matching, and tactile Y2K Neobrutalism.

* **Sprint Context:** Built and shipped as an equal 3-person team in a high-intensity **24-hour hackathon sprint** (SDG Open Hack 2026 — Responsible Consumption & Production).
* **Architecture & Technologies:** React 19, Vite 8, Node.js, Express 5, Excel Parser (`xlsx`), CSS 3D Transforms, AI API integration, SHA-256 Hashing, Neobrutalist Design System
* **Core Engineering:**
  * **Deterministic 7-Stage Pipeline:** Built a zero-leak mystery flow enforcing hard budget ceilings, allergen/dietary filters, and size constraints across multi-category surplus inventories.
  * **SHA-256 Offer Verification:** Decoupled candidate previews (`/api/drops/match`) from reveal payloads (`/api/drops/reveal`) using deterministic hash IDs, eliminating product spoilers while guaranteeing reproducible bundle calculation.
  * **Tactile Y2K Gacha Arcade UX:** Developed physical microswitch button physics (`.button-hitbox` zero-shadow depression), CSS 3D perspective box drop/burst animations, and sequential card-pull interactions.
  * **Resilient Hybrid AI Layer:** Integrated a server-side AI API to generate quiz dilemmas from live stock metadata, paired with deterministic offline fallback questions to keep the demo available and prevent invented prices.
* **Media & Demos:** Campaign ad and demo walkthrough are documented; public playback links are pending.
* **Documentation:** [Detailed Technical Case Study](docs/portfolio.md#3-case-study-rollover--circular-retail-gacha-arcade-sdg-open-hack-2026) | [Resume Deliverables](docs/resume.md#rollover--circular-retail-gacha-arcade-sdg-open-hack-2026)

---

### Shades of SG — AI Music Video Studio & Creative Copilot
**Full-Stack Engineer — Media Generation Pipeline, Mini Timeline Editor & AI Assistant**

An AI music video studio for a general music audience: bring a song, review its proposed scenes, generate the video, then refine frames and lyrics in a browser-based timeline editor with Shades Assistant.

* **Architecture & Technologies:** React, Vite, Node.js, Express, PostgreSQL, Sequelize, WaveSurfer.js, Web Audio API, FFmpeg, Cloudinary, AI API integration
* **Core Engineering:**
  * Generation Studio dashboard with song intake, job filtering, and three-second polling for queued and processing jobs
  * Asynchronous media pipeline coordinating transcription, scene planning, a creator-review pause, image generation, and FFmpeg video assembly
  * Timestamped lyric blocks that creators can move between scenes while preserving audio alignment in PostgreSQL JSONB (`scene_segments.blocks`)
  * Deterministic chorus hash caching (`normalizeCacheKey`) reducing image generation API costs by 20% to 35%
  * Browser-based timeline editor with waveform navigation, frame regeneration or custom image upload, and caption-controlled export
  * Shades Assistant offers scene critique and reviewable prompt, lyric, and chorus edits through actionable patch cards
  * Public video playback with synchronized lyrics, creator-curated song articles, instrument interactions, and quizzes
* **Repository:** [Shades-of-SG/Shades-of-SG](https://github.com/Shades-of-SG/Shades-of-SG)
* **Documentation:** [Current Product Scope](docs/portfolio.md#26-current-product-scope-2026-10-12) | [Resume Deliverables](docs/resume.md#shades-of-sg--ai-assisted-music-video-studio)

---

### SGEN — Intergenerational Social Platform
**Posts Engine, Feed, Accessibility & Assistive Systems Developer**

An intergenerational social platform with browser speech tools, dictionary-based slang explanations, and outbound-link confirmation.

* **Architecture & Technologies:** React 18, Python (`Flask[async]`), SQLite (`aiosqlite`), Web Speech API (`SpeechRecognition`, `SpeechSynthesis`), Custom CSS
* **Core Engineering:**
  * Async Flask post/comment handlers with awaitable `aiosqlite` database operations
  * Page-based infinite scrolling with a scroll listener, in-flight request guard, post-ID deduplication, and backend `LIMIT`/`OFFSET` queries
  * Browser-native multilingual speech-to-text dictation across 4 national languages (EN, ZH, MS, TA) and modulated TTS
  * Client-side dictionary explanations alongside "Link Guard" destination confirmation
* **Documentation:** [Detailed Technical Case Study](docs/portfolio.md#1-sgen--intergenerational-social-platform) | [Resume Deliverables](docs/resume.md#sgen--intergenerational-social-platform)

---

## Repository Structure

```
portfolio/
├── src/
│   ├── components/      # Shared header, footer, cards, covers, diagram
│   ├── content/work/    # Edited, schema-validated MDX case studies
│   ├── data/            # Identity and project summaries
│   ├── layouts/         # Shared HTML shell
│   ├── pages/           # Home, About, Resume, generated case studies, 404
│   └── styles/          # Design tokens and responsive styles
├── public/              # Static assets
├── scripts/             # Built HTML/link/asset verification
├── docs/
│   ├── AGENTS.md        # Phase boundary and handoff log
│   ├── site-plan.md     # Product brief, sitemap, content plan, open decisions
│   ├── design-spec.md   # Page layouts, design system, accessibility
│   ├── TSD.md           # Technical architecture and build acceptance criteria
│   ├── content-evidence.md # Claim and asset publication checklist
│   ├── portfolio.md     # Master project knowledge base
│   └── resume.md        # Resume bullet bank
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## Quick Navigation

* **For Collaborators:** Read [docs/AGENTS.md](docs/AGENTS.md) for the current phase boundary and handoff notes.
* **Phase 1 Review & Validation:** See [docs/phase-1-review.md](docs/phase-1-review.md).
* **Phase 2 Review & Validation:** See [docs/phase-2-review.md](docs/phase-2-review.md).
* **Phase 3 Review & Validation:** See [docs/phase-3-review.md](docs/phase-3-review.md).
* **Deployment & Host Settings:** See [docs/deployment.md](docs/deployment.md).
* **Website Product & Content Plan:** See [docs/site-plan.md](docs/site-plan.md).
* **Page Layouts & UI:** See [docs/design-spec.md](docs/design-spec.md).
* **Technical Specification & Build Gates:** See [docs/TSD.md](docs/TSD.md).
* **Claim & Asset Review:** See [docs/content-evidence.md](docs/content-evidence.md).
* **Master Case Studies & Technical Architecture:** See [docs/portfolio.md](docs/portfolio.md).
* **Resume Bullet Bank & Technical Skills:** See [docs/resume.md](docs/resume.md).
