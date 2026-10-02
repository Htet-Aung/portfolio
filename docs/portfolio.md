# Master Project Knowledge Base

This document serves as the single source of truth for all verified engineering deliverables, architecture designs, data models, and trade-off rationales across Htet Aung Khant's projects.

---

## 1. SGEN – Intergenerational Social Platform

### 1.1 Project Overview & Candidate Role
* **Repository:** `Generic-Inc/SGEN`
* **Core Role:** Posts Engine, Feed, Accessibility & Assistive Systems Developer
* **Primary Objective:** Bridge generational communication gaps between youth and seniors through an accessible social platform equipped with dialect/multilingual speech tools, slang translation, and defensive scam-mitigation controls.
* **Technology Stack:**
  * **Frontend:** React 18, Custom CSS (semantic, accessible design tokens)
  * **Backend:** Python (Flask with async extension / ASGI adapter: `Flask[async]`)
  * **Database / Storage:** SQLite via `aiosqlite` (asynchronous non-blocking I/O)
  * **Browser Native APIs:** Vanilla Web Speech API (`webkitSpeechRecognition` / `SpeechRecognition`, `SpeechSynthesis`)

---

### 1.2 System Architecture Flow

```
+---------------------------------------------------------------------------------------+
|                                    CLIENT (React 18)                                  |
|                                                                                       |
|  +------------------------------------+      +-------------------------------------+  |
|  |     Infinite Scroll Feed Engine    |      |      Multilingual Assistive Layer   |  |
|  |  - IntersectionObserver listener   |      |  - SpeechRecognition (EN/ZH/MS/TA)  |  |
|  |  - Cursor/Batch state accumulator  |      |  - SpeechSynthesis (TTS Utterance)  |  |
|  +-----------------+------------------+      +------------------+------------------+  |
|                    |                                            |                     |
|                    | Fetch next batch                           | Emit text / Audio   |
|                    v                                            v                     |
|  +-----------------+------------------+      +------------------+------------------+  |
|  |    Client-side Lexical Scanner     |      |  Link Guard & Senior Adapt Layer    |  |
|  |  - Word boundary tokenizer (\b)    |      |  - Outbound domain interceptor      |  |
|  |  - Slang dictionary map lookup     |      |  - Smart Reply Chip generator       |  |
|  |  - Contextual popover renderer     |      |  - Conditional layout (age > 60)    |  |
|  +-----------------+------------------+      +------------------+------------------+  |
+--------------------|--------------------------------------------|---------------------+
                     |                                            |
                     | JSON over HTTP / REST                      |
                     v                                            v
+---------------------------------------------------------------------------------------+
|                                  BACKEND SERVER (Python)                              |
|                                                                                       |
|   Flask[async] Application Core                                                       |
|   +-------------------------------------------------------------------------------+   |
|   | Async Feed & Post Router                                                      |   |
|   |  - GET  /api/feed?cursor=<id>&limit=10  -> Async batch pagination              |   |
|   |  - POST /api/posts                     -> Non-blocking post creation          |   |
|   |  - GET  /api/posts/<id>/comments       -> Recursive/nested comments retrieval |   |
|   |  - POST /api/posts/<id>/comments       -> Non-blocking comment insertion      |   |
|   +---------------------------------------+---------------------------------------+   |
|                                           |                                           |
|                                           | Non-blocking SQL queries (asyncio loop)   |
|                                           v                                           |
|   aiosqlite Database Driver                                                           |
+-------------------------------------------|-------------------------------------------+
                                            |
                                            v
+---------------------------------------------------------------------------------------+
|                                   PERSISTENCE (SQLite)                                |
|                                                                                       |
|  +-------------------------------------+    +--------------------------------------+  |
|  | Table: posts                        |    | Table: comments                      |  |
|  |  - id: INTEGER PRIMARY KEY          |    |  - id: INTEGER PRIMARY KEY           |  |
|  |  - author_id: INTEGER               |    |  - post_id: INTEGER (FK -> posts.id) |  |
|  |  - content: TEXT                    |    |  - parent_id: INTEGER NULL (Self FK) |  |
|  |  - created_at: TIMESTAMP            |    |  - author_id: INTEGER                |  |
|  |  - language: VARCHAR(10)            |    |  - content: TEXT                     |  |
|  +-------------------------------------+    |  - created_at: TIMESTAMP             |  |
|                                             +--------------------------------------+  |
+---------------------------------------------------------------------------------------+
```

---

### 1.3 Key Technical Deliverables & Deep-Dive Mechanics

#### A. Asynchronous Feed Router & Non-Blocking CRUD
* **Mechanism:** Traditional Flask route handlers are synchronous and thread-bound, which risks blocking the WSGI worker during disk-bound database queries. Implemented `Flask[async]` coroutines (`async def`) coupled with `aiosqlite` asynchronous context managers (`async with aiosqlite.connect(...)`).
* **Nested Comment Model:** Designed an adjacency list schema (`parent_id` referencing `comments.id`) to support recursive comment threads beneath posts without requiring heavy external graph databases.
* **Concurrency:** By delegating I/O operations to Python’s `asyncio` event loop via `aiosqlite`, concurrent feed requests execute without starving the worker thread pool.

#### B. Batch-Paginated Infinite Scrolling
* **Mechanism:** Built an infinite scrolling feed component in React 18 leveraging `IntersectionObserver` to trigger incremental data fetches when sentinel elements intersect the viewport.
* **Data Flow:** Requests fetch chunks constrained by `limit` and `cursor` (e.g., `last_seen_post_id`), preventing full-table scans and payload bloat.
* **State Management:** Appended new chunks into the feed state array with deduplication checks, keeping initial page load payloads minimal and avoiding memory degradation over long user browsing sessions.

#### C. Multilingual Assistive Voice Layer
* **Speech-to-Text (`SpeechRecognition`):** Integrated browser-native `SpeechRecognition` API supporting 4 official languages of Singapore: English (`en-SG`/`en-US`), Mandarin Chinese (`zh-CN`), Malay (`ms-MY`), and Tamil (`ta-SG`). Implemented interim result streaming into the post composition input area with error fallback handling for non-supported browsers.
* **Text-to-Speech (`SpeechSynthesis`):** Built an inline read-aloud utility that parses post text into `SpeechSynthesisUtterance` instances. Configured speech synthesis rate ($0.9\times$) and pitch modulation to optimize comprehension for senior users with hearing impairments. Ensured active audio streams cancel cleanly on unmount (`window.speechSynthesis.cancel()`) to prevent audio leak across routes.

#### D. Client-Side Lexical Slang Scanner
* **Mechanism:** To bridge intergenerational vernacular barriers without introducing round-trip server latency, engineered a client-side lexical tokenizer.
* **Parsing Pipeline:** Evaluates post text against regular expressions with word boundary assertions (`\b`), tokenizing words and checking them against a normalized dictionary of Gen-Z terms (e.g., *"rizz"*, *"delulu"*, *"no cap"*, *"gyatt"*).
* **UI Integration:** Matched slang tokens are dynamically wrapped into accessible popover elements (`<mark>` or interactive spans) displaying simplified, senior-friendly definitions upon hover or tap.

#### E. "Link Guard" Security & Demographic Adaptation
* **Link Guard:** Implemented an outbound link interception layer across all rendered post/comment HTML. When an external or untrusted URL is clicked, default browser navigation is suppressed, and a modal displays the destination domain, phishing awareness guidance, and an explicit opt-in confirmation.
* **Senior-Adapted UI (`age > 60`):** System conditionally evaluates user profile metadata to adjust typography scaling, enlarge touch tap targets ($\ge 48\text{px}$), and inject single-tap **Smart Reply Chips** (pre-composed replies such as *"Thank you!"*, *"Good morning!"*, *"Call me later"*) to lower motor and cognitive interaction hurdles.

---

### 1.4 Engineering Trade-offs & Architecture Decisions

| Decision | Chosen Architecture | Alternative Considered | Engineering Rationale & Trade-off |
| :--- | :--- | :--- | :--- |
| **Database Concurrency** | `aiosqlite` (Async SQLite) | PostgreSQL / SQLAlchemy ORM | **Chosen:** Avoided heavy database server infrastructure for prototype agility while introducing non-blocking queries via `asyncio`.<br>**Trade-off:** SQLite's file-level locking restricts concurrent write throughput compared to PostgreSQL's row-level locking. |
| **Slang Processing** | Client-side Lexical Scanner | Server-side NLP Endpoint | **Chosen:** Executed tokenization directly in the browser with zero API latency and zero cloud compute cost.<br>**Trade-off:** Client bundle size slightly increased by slang dictionary payload, requiring manual dictionary synchronization. |
| **Voice Processing** | Browser Native Web Speech API | Cloud STT/TTS (e.g. Whisper, Google Cloud) | **Chosen:** $0 operating cost, zero server latency, no API token exposure in client bundle.<br>**Trade-off:** Voice model accuracy and language support vary across browsers (Chrome/Chromium vs Firefox/Safari). |

---

## 2. Case Study: Shades of SG — AI-Powered Cultural Media Studio

### 2.1 Executive Summary & Problem Space
Traditional cultural archives often struggle to engage younger, digital-first audiences through static song recordings and historical texts. Shades of SG addresses this cultural disconnect by pairing modern generative AI with cultural preservation, converting traditional Singaporean heritage music into lyric-synchronized cinematic music videos and gamified learning platforms.

As the Lead Full-Stack Engineer owning **V1 (AI Video Generation Pipeline)** and **P2 (Experience & Content Consumption)**, I architected and implemented the end-to-end distributed media pipeline, the pre-generation human-in-the-loop review system, the in-browser multitrack timeline video editor, and the public synchronized viewing engine.

> **Strict Ownership & Attribution Scope:**
> * **Assigned Ownership (Htet):** V1 (Media Ingestion, 5-Phase Generation Engine, Scene Planning, Frame Generation with Chorus Deduplication, FFmpeg Stitching, Cultural Curation) & P2 (Multitrack Timeline Video Editor, DeepSeek Copilot Drawer, Public Video Player, Synced Captions, Web Audio API Synthesizers, Trivia Engine).
> * **Teammate Ownership (Explicitly Excluded from Scope):** Song Metadata Studio, Canvas Rhythm Game, Community Reflection Wall (Ferlyn); Creator Dashboard, Song Management, Guided Music Lessons, Instrument Playground (Shermaine); User Auth/RBAC, Song Discovery Library, Admin Safety & Error Handling (Lia).

---

### 2.2 System Architecture & Pipeline Dataflow
The platform runs as a decoupled Single Page Application (React + Vite) communicating with a Node.js/Express REST backend backed by PostgreSQL (Sequelize) and Cloudinary media persistence.

```
[Media Intake: MP3/WAV Upload or yt-dlp Stream]
                    │
                    ▼
     [Phase 1: Audio & Whisper Speech Extraction]
                    │
                    ▼
     [Phase 2: DeepSeek Hook-Aware Scene Planning (6.0s–7.5s Blocks)]
                    │
                    ▼
      [State: AWAITING_REVIEW] ──► (Creator UI: Atomic Lyric Drag-and-Drop)
                    │
                    ▼
     [Phase 3: Frame Generation (GPT Image 2 + Chorus Deduplication)]
                    │
                    ▼
     [Phase 4: FFmpeg Video & Subtitle Stitching]
                    │
                    ▼
     [Phase 5: Cultural Curation & Context Synthesis]
                    │
                    ├─► [VideoEditor: WaveSurfer.js + DeepSeek Copilot [Shift+A]]
                    └─► [SongExperience: Zero-Drift Video Player + Web Audio API]
```

#### The 5-Phase Distributed Generation Engine
* **Intake & Transcription (Whisper API):** Ingests raw audio files or streams via `yt-dlp`. Generates word-level timestamps saved as sub-second segments to establish immutable audio-lyric boundaries.
* **Hook-Aware Scene Planning (DeepSeek):** Pre-groups raw transcription segments into balanced 6.0s–7.5s cinematic blocks (~28–32 scenes per standard track) to maintain narrative continuity and prevent prompt drift.
* **Cost-Optimized Frame Generation (OpenAI GPT Image 2):** Renders visual scene frames while querying an in-memory hash cache to identify and reuse repeating chorus visuals.
* **Asynchronous Video Assembly (FFmpeg & Cloudinary):** Stitches rendered frames, original audio, and styled subtitle layers into an optimized MP4 video stream uploaded to Cloudinary.
* **Contextual Curation (`aiCurationPlanner.js`):** Automatically synthesizes cultural summaries, extracts Singaporean heritage instruments (Gambus, Erhu, Kompang), and drafts multi-tiered multiple-choice trivia quizzes.

---

### 2.3 Deep-Dive Engineering Challenges & Solutions

#### Challenge 1: Runaway Generative Costs on Repetitive Song Structures
* **The Problem:** Generating individual images for every 6-second scene across a 3.5-minute track (~30 scenes) causes high API expenses. Generating distinct images for repeating choruses and refrains produces visual discontinuity and consumes unnecessary API quota.
* **The Solution:** Engineered a chorus deduplication hash cache in `frameGenerator.js`:
  * Implemented `normalizeCacheKey(lyrics)` to strip punctuation, casing, and whitespace from lyrical hooks.
  * Prior to initiating image generation calls, the engine computes the lyric hash.
  * If a matching chorus visual exists, the pipeline re-links the existing Cloudinary asset to the new scene segment with zero redundant image generations.
* **The Impact:** Slashed image generation API expenses by 20% to 35% per track and significantly decreased Phase 3 pipeline execution latency.

#### Challenge 2: Audio-Subtitle Desynchronization During Creator Re-Planning
* **The Problem:** Creators needed the ability to modify visual prompts and adjust scene divisions before spending image generation credits. Providing raw numeric millisecond input fields frequently led to human error, resulting in broken subtitle timings and audio desynchronization.
* **The Solution:** Introduced the `AWAITING_REVIEW` state machine intercept in `generationController.js` and an atomic block data model:
  * Added a `blocks` JSONB column to the `scene_segments` table in PostgreSQL.
  * In `GenerationProgress.jsx`, each Whisper line is encapsulated as an immovable atomic block with fixed timestamps (`start_time`, `end_time`).
  * Creators rearrange lyrics by dragging atomic pill components between scenes or splitting scenes.
  * The frontend dynamically recalculates scene boundaries ($\text{start}=\min(\text{block.start}), \text{end}=\max(\text{block.end})$) while preserving the underlying audio-to-speech synchronization.
  * Built an automatic prompt fallback safeguard in the `confirmScenes` endpoint: if a creator approves a newly created scene without writing a visual prompt, DeepSeek automatically backfills a contextual visual description to prevent pipeline failures.
* **The Impact:** Completely eliminated sub-second caption drift and prevented pipeline crashes from incomplete scene edits.

#### Challenge 3: In-Browser Multitrack Timeline Video Editor & DeepSeek Copilot
* **The Problem:** Creators required post-generation editing capabilities (modifying prompts, regenerating specific scenes, propagating visual adjustments, and correcting lyrics) without re-running the entire 5-phase pipeline or dealing with clunky controls.
* **The Solution:** Developed `VideoEditor.jsx` featuring:
  * **WaveSurfer.js Integration:** Interactive waveform visualization, frame-by-frame filmstrip scrubbing, and keyboard shortcuts (`Space` to toggle playback, `C` for captions, `F` for fullscreen).
  * **Global Chorus Propagation:** Built an inspector toggle that hashes the normalized lyrics of a scene, identifies all matching chorus repeats across the timeline, and updates all sibling frames to reference the new visual asset simultaneously.
  * **Natural Language Copilot (`Shift + A`):** Built an embedded assistant drawer powered by DeepSeek (`POST /api/generation/job/:jobId/assistant-command`). Creators issue natural language instructions (e.g., *"Make Scene 4 warmer and propagate across all chorus scenes"*). The backend returns structured non-destructive JSON patches (`UPDATE_PROMPT`, `UPDATE_LYRICS`, `PROPAGATE_CHORUS`).
  * **Zero-Interruption Hot-Swapping:** Affected scenes pulse with an amber CSS highlight (`@keyframes copilot-pulse`), and changes hot-swap directly into React state without re-initializing the WaveSurfer audio instance or resetting playback timestamps.

#### Challenge 4: Zero-Drift Public Playback & Cultural Synthesis Engine
* **The Problem:** Standard HTML5 `<track>` implementations flickered when rendering multi-line sub-block lyrics across rapid audio transitions. Cultural context text on public pages also often felt passive and unengaging.
* **The Solution:** Engineered `SongExperience.jsx` and `CustomVideoPlayer.jsx` featuring:
  * **Zero-Drift Caption Renderer:** Evaluates active sub-blocks dynamically using strict non-inclusive timestamp bounds ($\text{startTime} \le t < \text{endTime}$), eliminating caption overlap and render flicker.
  * **Web Audio API Heritage Synthesizer:** Built an interactive sidebar instrument panel combining sample audio playback with synthetic Web Audio oscillator note generation, providing responsive musical feedback without external asset lag.
  * **Interactive Cultural Trivia (`TriviaHub.jsx`):** Developed an embedded quiz viewer providing immediate answer validation, scoring, and retake workflows.

---

### 2.4 Database Schema & Data Integrity Highlights
* **`generation_jobs`:** Tracks asynchronous pipeline progress across statuses (`INITIALIZING`, `TRANSCRIBING`, `PLANNING_SCENES`, `AWAITING_REVIEW`, `GENERATING_IMAGES`, `ASSEMBLING_VIDEO`, `CURATING_CONTENT`, `COMPLETED`, `FAILED`).
* **`scene_segments`:** Stores scene timestamps, visual prompts, and the `blocks` JSONB column holding immutable Whisper sub-block metadata.
* **`generated_frames`:** Maps rendered frames to Cloudinary media URLs, storing `prompt_hash` references for chorus reuse.
* **`songs`:** Stores published music assets, pre-populating lyrics and cover images directly from editor handoffs.

---

### 2.5 Measurable Outcomes & Technical Metrics
* **20%–35% Cost Reduction:** Deterministic chorus deduplication eliminated redundant calls to image generation APIs.
* **100% Timing Fidelity:** Atomic Whisper block drag-and-drop preserved sub-second caption synchronization across all scene rearrangements.
* **Sub-Second Hot-Swapping:** DeepSeek Copilot JSON patch integration allowed instant multi-scene updates without re-instantiating timeline audio or disrupting playback.

---

## 3. Upcoming Projects (Awaiting Intake)

> *This section holds staging structures for incoming projects. When raw data, code repositories, or slide decks are provided, translate them into the standard architecture format shown above.*

### 3.1 Project: Applied AI / Analytics Academic Project (NYP)
* **Status:** `Awaiting Data Intake`
* **Target Schema:** [Pending User Input]
