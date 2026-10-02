# Technical Resume Revisions & Bullet Bank

This file maintains recruiter-ready, high-signal bullet points and candidate skills inventory. All bullet points strictly follow the formula:
$$\text{[Action Verb]} + \text{[Specific Tech / Architecture]} + \text{[Feature / Mechanism]} + \text{[Impact / Metric]}$$

---

## 1. Candidate Profile & Technical Skills Inventory

* **Candidate:** Htet Aung Khant
* **Education:** Diploma in Applied AI & Analytics, Nanyang Polytechnic (Singapore)
* **Target Roles:** Software Engineer (Full Stack / Frontend / Backend), Applied AI Engineer, Solutions Developer

### Technical Skills
* **Languages:** Python, JavaScript (ES6+), TypeScript, SQL, HTML5, CSS3
* **Backend & Systems:** Node.js, Express (Express 5), PostgreSQL, Sequelize, Flask (`Flask[async]`), `aiosqlite`, RESTful APIs, Asynchronous I/O, SQLite, JSONB, Excel Workbook Parsing (`xlsx`), SHA-256 Cryptographic Verification
* **Generative AI & Media Processing:** OpenAI Whisper, DeepSeek, OpenAI GPT Image 2, OpenAI (`gpt-4.1-nano`), FFmpeg, Cloudinary, Prompt Engineering, Structured JSON Patches, Deterministic LLM Fallbacks
* **Frontend & Web APIs:** React (React 18 & React 19), Vite (Vite 8), WaveSurfer.js, Web Audio API, Vanilla Web Speech API (`SpeechRecognition`, `SpeechSynthesis`), IntersectionObserver API, CSS 3D Transforms, Responsive & Accessible UI
* **Engineering Disciplines:** Rapid Hackathon Prototyping (24h Sprint Delivery), Distributed Media Pipelines, State Machine Orchestration, Client-Side Lexical Analysis, Defensive UX / URL Interception, Web Accessibility (a11y), Single-Page Applications (SPA), Git Version Control

---

## 2. Verified Project Bullet Bank

### Full-Stack Engineer — ROLLOVER (SDG Open Hack 2026)
*24-Hour Hackathon Prototype (Equal 3-Person Team · SDG 12: Circular Retail) | Stack: React 19, Vite 8, Node.js, Express 5, Excel Parser (xlsx), CSS 3D Transforms, OpenAI (gpt-4.1-nano)*

* **Co-architected and built** an end-to-end circular-retail discovery platform with an equal 3-person team during a high-intensity **24-hour hackathon sprint**, converting enterprise surplus deadstock into personalized mystery bundles diverting usable physical products from landfills (SDG 12).
* **Engineered** a deterministic inventory-grounded matching engine in Node.js/Express 5 that partitions live surplus stock into up to 4 sealed bundle tiers, enforcing strict budget ceilings, size constraints, and dietary/allergen exclusions with 100% compliance.
* **Implemented** a zero-spoiler state machine and SHA-256 offer verification protocol separating preview metadata (`/api/drops/match`) from reveal payloads (`/api/drops/reveal`), preventing client-side SKU leakage and eliminating bundle tampering.
* **Developed** a tactile Y2K Neobrutalist arcade interface in React 19 featuring mechanical microswitch button physics, CSS 3D perspective box drop/burst animations, sequential card-pull flips, and complete haul transparency.
* **Built** a resilient hybrid AI quiz service leveraging `gpt-4.1-nano` to dynamically synthesize scenario dilemmas from real inventory tags, coupled with an automatic offline deterministic fallback ensuring zero demo downtime and zero price hallucinations.

---

### Full-Stack Engineer — Shades of SG
*Distributed AI Media Pipeline & Cultural Studio | Stack: React, Vite, Node.js, Express, PostgreSQL, Cloudinary, OpenAI, DeepSeek*

* **Architected** an asynchronous 5-phase generative media pipeline orchestrating audio intake (`yt-dlp`), Whisper speech-to-text, DeepSeek scene planning, GPT Image 2 rendering, and FFmpeg video assembly in Node.js/PostgreSQL.
* **Reduced** generative image API costs by 20% to 35% by developing a deterministic chorus-hashing engine (`normalizeCacheKey`) that identifies repeating lyrical hooks and re-links Cloudinary frame assets across scenes.
* **Eliminated** audio-caption timing drift by implementing an `AWAITING_REVIEW` state machine with drag-and-drop atomic Whisper blocks stored in PostgreSQL JSONB (`scene_segments.blocks`), dynamically recalculating scene boundaries while maintaining sub-second alignment.
* **Engineered** a multitrack timeline video editor utilizing WaveSurfer.js and a natural language AI Copilot drawer (DeepSeek via `Shift + A`), translating conversational editing commands into structured JSON patches hot-swapped into React state without playback interruption.
* **Built** the public interactive consumption experience, deploying a custom zero-drift HTML5 synchronized caption engine, interactive Web Audio API heritage instrument synthesizers, and real-time cultural trivia quizzes.

---

### SGEN – Intergenerational Social Platform
*Role: Posts Engine, Feed, Accessibility & Assistive Systems Developer | Stack: React 18, Python (Flask async), aiosqlite, Web Speech API*

* **Backend & Async Concurrency:**
  > **Engineered** an asynchronous RESTful feed engine using `Flask[async]` and `aiosqlite` to handle non-blocking CRUD operations for posts and nested comment trees, eliminating worker thread blocking under concurrent database I/O.

* **Client Performance & Data Streaming:**
  > **Architected** batch-paginated infinite scrolling in React 18 using `IntersectionObserver`, implementing cursor-constrained chunk queries that minimized initial network payloads and eliminated DOM rendering lag during long-session browsing.

* **Multilingual Accessibility & Voice I/O:**
  > **Integrated** the browser-native Web Speech API (`SpeechRecognition` & `SpeechSynthesis`) to deliver real-time voice-to-text dictation across 4 languages (English, Mandarin, Malay, Tamil) and modulated inline text-to-speech playback, removing keyboard dependency for senior users.

* **Client-side Lexical Analysis & Defensive UX:**
  > **Developed** a zero-latency client-side lexical scanner tokenizing word boundaries against localized Gen-Z dictionaries for instant definition popovers, coupled with an outbound "Link Guard" domain interceptor and age-adaptive UI (`age > 60`) with one-tap Smart Reply Chips.

---

## 3. Staging Area: Future Project Bullet Lab

> *Use this staging area to iterate and refine draft bullets for incoming projects before finalizing them for the resume.*

### 3.1 Project: Applied AI / Analytics Project (NYP) (Drafting Lab)

* **Raw Notes & Ingested Info:**
  * *[Awaiting project data]*

* **Draft Iteration 1 (Work-in-Progress):**
  * *[Draft bullet pending]*

* **Critique & Formula Verification:**
  * *Action Verb Check:* [Pending]
  * *Tech/Architecture Specificity:* [Pending]
  * *Mechanism Clarification:* [Pending]
  * *Measurable Impact:* [Pending]

* **Recruiter-Ready Target (Final Candidate):**
  * *[Pending user review]*
