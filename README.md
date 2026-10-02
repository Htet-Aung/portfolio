# Htet Aung Khant – Portfolio & Resume Knowledge Repository

> **Repository Status:** `PHASE 1: INFORMATION GATHERING & REFINEMENT`  
> **Boundary Notice:** This repository is currently dedicated to building an engineering-grade knowledge base and recruiter-ready resume bullet bank. No application scaffolding or frontend/backend builds are active in this phase.

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
* **Architecture & Technologies:** React 19, Vite 8, Node.js, Express 5, Excel Parser (`xlsx`), CSS 3D Transforms, OpenAI (`gpt-4.1-nano`), SHA-256 Hashing, Neobrutalist Design System
* **Core Engineering:**
  * **Deterministic 7-Stage Pipeline:** Built a zero-leak mystery flow enforcing hard budget ceilings, allergen/dietary filters, and size constraints across multi-category surplus inventories.
  * **SHA-256 Offer Verification:** Decoupled candidate previews (`/api/drops/match`) from reveal payloads (`/api/drops/reveal`) using deterministic hash IDs, eliminating product spoilers while guaranteeing reproducible bundle calculation.
  * **Tactile Y2K Gacha Arcade UX:** Developed physical microswitch button physics (`.button-hitbox` zero-shadow depression), CSS 3D perspective box drop/burst animations, and sequential card-pull interactions.
  * **Resilient Hybrid AI Layer:** Integrated server-side `gpt-4.1-nano` to dynamically synthesize quiz dilemmas from live stock metadata, paired with deterministic offline fallback questions to ensure zero runtime downtime and zero price hallucinations.
* **Media & Demos:** 🎬 [Marketing Campaign Ad Video](docs/portfolio.md#32-media--demo-video-showcase) | 🕹️ [Full Interactive Demo Walkthrough](docs/portfolio.md#32-media--demo-video-showcase)
* **Documentation:** [Detailed Technical Case Study](docs/portfolio.md#3-case-study-rollover--circular-retail-gacha-arcade-sdg-open-hack-2026) | [Resume Deliverables](docs/resume.md#rollover--circular-retail-gacha-arcade-sdg-open-hack-2026)

---

### Shades of SG — AI-Powered Cultural Media Studio
**Full-Stack Engineer — AI Video Generation Pipeline (V1) & Content Consumption Experience (P2)**

An end-to-end distributed generative media pipeline and interactive cultural studio transforming traditional Singaporean folk songs into cinematic, lyric-synchronized visual narratives.

* **Architecture & Technologies:** React, Vite, Node.js, Express, PostgreSQL, Sequelize, WaveSurfer.js, Web Audio API, FFmpeg, Cloudinary, OpenAI Whisper, DeepSeek, OpenAI GPT Image 2
* **Core Engineering:**
  * Asynchronous 5-phase generative media pipeline with human-in-the-loop review state machine (`AWAITING_REVIEW`)
  * Sub-second atomic Whisper lyric block drag-and-drop system storing timing bounds in PostgreSQL JSONB (`scene_segments.blocks`)
  * Deterministic chorus hash caching (`normalizeCacheKey`) reducing image generation API costs by 20% to 35%
  * Browser-based multitrack timeline editor (`VideoEditor.jsx`) with WaveSurfer.js and DeepSeek AI Copilot drawer (`Shift + A`) applying non-destructive JSON patches without playback interruption
  * Custom HTML5 synchronized caption renderer with zero-drift non-inclusive intervals and Web Audio API heritage instrument synth
* **Documentation:** [Detailed Technical Case Study](docs/portfolio.md#2-case-study-shades-of-sg--ai-powered-cultural-media-studio) | [Resume Deliverables](docs/resume.md#shades-of-sg--ai-powered-cultural-media-studio)

---

### SGEN — Intergenerational Social Platform
**Posts Engine, Feed, Accessibility & Assistive Systems Developer**

An accessible social platform bridging generational communication gaps between youth and seniors through real-time multilingual speech tools, client-side slang translation, and defensive phishing protection.

* **Architecture & Technologies:** React 18, Python (`Flask[async]`), SQLite (`aiosqlite`), Web Speech API (`SpeechRecognition`, `SpeechSynthesis`), Custom CSS
* **Core Engineering:**
  * Asynchronous RESTful feed engine and non-blocking CRUD endpoints for posts and nested comment trees with `aiosqlite`
  * Batch-paginated infinite scrolling in React 18 with `IntersectionObserver` cursor queries
  * Browser-native multilingual speech-to-text dictation across 4 national languages (EN, ZH, MS, TA) and modulated TTS
  * Client-side zero-latency lexical scanner tokenizing Gen-Z slang alongside "Link Guard" outbound domain interceptor
* **Documentation:** [Detailed Technical Case Study](docs/portfolio.md#1-sgen--intergenerational-social-platform) | [Resume Deliverables](docs/resume.md#sgen--intergenerational-social-platform)

---

## Repository Structure

```
portfolio/
├── docs/
│   ├── AGENTS.md        # Multi-agent coordination log, intake protocol & handoff briefings
│   ├── portfolio.md     # Master technical knowledge base (architecture diagrams, mechanics, trade-offs)
│   └── resume.md        # Recruiter-ready bullet bank ([Action Verb] + [Tech] + [Mechanism] + [Impact])
├── .gitignore
└── README.md
```

## Quick Navigation

* **For Collaborating / Incoming Agents:** Read [docs/AGENTS.md](docs/AGENTS.md) first for operating boundaries and project intake checklists.
* **Master Case Studies & Technical Architecture:** See [docs/portfolio.md](docs/portfolio.md).
* **Resume Bullet Bank & Technical Skills:** See [docs/resume.md](docs/resume.md).