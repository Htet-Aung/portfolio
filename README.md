# Htet Aung Khant – Portfolio & Resume Knowledge Repository

> **Repository Status:** `PHASE 1: INFORMATION GATHERING & REFINEMENT`  
> **Boundary Notice:** This repository is currently dedicated to building an engineering-grade knowledge base and recruiter-ready resume bullet bank. No application scaffolding or frontend/backend builds are active in this phase.

---

## Featured Projects

### Shades of SG — AI-Powered Cultural Media Studio
**Lead Full-Stack Engineer — AI Video Generation Pipeline (V1) & Content Consumption Experience (P2)**

An end-to-end distributed generative media pipeline and interactive cultural studio transforming traditional Singaporean folk songs into cinematic, lyric-synchronized visual narratives.

* **Architecture & Technologies:** React, Vite, Node.js, Express, PostgreSQL, Sequelize, WaveSurfer.js, Web Audio API, FFmpeg, Cloudinary, OpenAI Whisper, DeepSeek, OpenAI GPT Image 2
* **Core Engineering:**
  * Asynchronous 5-phase generative media pipeline with human-in-the-loop review state machine (`AWAITING_REVIEW`)
  * Sub-second atomic Whisper lyric block drag-and-drop system storing timing bounds in PostgreSQL JSONB (`scene_segments.blocks`)
  * Deterministic chorus hash caching (`normalizeCacheKey`) reducing image generation API costs by 20% to 35%
  * Browser-based multitrack timeline editor (`VideoEditor.jsx`) with WaveSurfer.js and DeepSeek AI Copilot drawer (`Shift + A`) applying non-destructive JSON patches without playback interruption
  * Custom HTML5 synchronized caption renderer with zero-drift non-inclusive intervals and Web Audio API heritage instrument synth
* **Documentation:** [Detailed Technical Case Study](docs/portfolio.md#2-case-study-shades-of-sg--ai-powered-cultural-media-studio) | [Resume Deliverables](docs/resume.md#lead-full-stack-engineer--shades-of-sg)

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