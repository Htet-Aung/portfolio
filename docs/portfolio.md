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

## 2. Upcoming Projects (Awaiting Intake)

> *This section holds staging structures for incoming projects. When raw data, code repositories, or slide decks are provided, translate them into the standard architecture format shown above.*

### 2.1 Project: Shades of SG
* **Status:** `Awaiting Data Intake`
* **Target Schema:**
  * **Repository / Client:** [TBD]
  * **Role & Ownership:** [TBD]
  * **Architecture Overview:** [TBD]
  * **Tech Stack & Libraries:** [TBD]
  * **Technical Deliverables & Concurrency/Data Mechanics:** [TBD]
  * **Engineering Trade-offs:** [TBD]
  * **Measurable Results / Metrics:** [TBD]

### 2.2 Project: Applied AI / Analytics Academic Project (NYP)
* **Status:** `Awaiting Data Intake`
* **Target Schema:** [Pending User Input]
