# Publication evidence and asset register

**Status:** Planning audit from 2026-10-02, updated with phase 2 source and media checks on 2026-10-10.  
**Source:** Existing [portfolio.md](portfolio.md), [resume.md](resume.md), README, and the public repositories recorded below. Numerical benchmark claims remain unapproved without current measured evidence.

## Editorial rule

The existing notes describe the projects in detail, but a portfolio should make every public claim traceable. Before publication, each numerical claim needs a source, method, and context. Team work needs exact attribution. If evidence is unavailable, replace a number or guarantee with a narrower factual description. A working repository link alone is not evidence for a runtime or user outcome unless it contains the relevant test or report.

`Documented` below means “stated in this repository,” not independently verified. `Needed` identifies the minimum review input. Mark a row `approved` only after Htet or a primary artifact confirms it.

| Project | Draft claim or asset | Current status | Needed before public use | Safe fallback if unavailable |
| --- | --- | --- | --- | --- |
| NumPyGrad | 152 passing tests | Documented | Current test command/output or CI run and date | “Comprehensive automated test suite” |
| NumPyGrad | 98.04% MNIST test accuracy, 52.1k parameters | Documented | Experiment script, dataset/split, checkpoint/log, conditions | Describe MNIST classifier without score |
| NumPyGrad | >40× convolution speedup | Documented | Benchmark script, baseline, hardware, input shape, repetitions | “Vectorized convolution with `im2col`” |
| NumPyGrad | 4,800+ line Streamlit studio | Documented | Current repository file size/line count; decide whether line count is useful | “Interactive Streamlit studio with three views” |
| NumPyGrad | Public source and studio capture | Public source checked; three genuine MIT-licensed captures integrated | Retain license and original-source attribution; captured numbers are session context | Decorative cover plus source link |
| Shades of SG | 20–35% image API cost reduction | Documented | Before/after call counts or calculation for representative songs | “Reuses frames for repeated choruses to avoid duplicate generation” |
| Shades of SG | “100% timing fidelity” / eliminated drift | Documented | Test cases, timing method, and scope | “Preserves fixed lyric-block timestamps during scene edits” |
| Shades of SG | Sub-second updates without playback interruption | Documented | Screen recording or timing measurement and environment | “Applies editor changes without restarting playback” if directly demonstrated |
| Shades of SG | Htet-owned vs teammate-owned modules | Detailed in source notes | Confirm with Htet/team and public repo history where available | Use only confirmed personal modules; label platform context as team work |
| Shades of SG | Source, demo, screenshots | No confirmed URLs/media here | Approved links/captures and team permissions | Omit source/demo controls; typographic cover |
| ROLLOVER | Built in 24 hours by equal team of three | Documented | Event record, team agreement, or owner confirmation | “Built during SDG Open Hack 2026 with a three-person team” |
| ROLLOVER | Finalist status | Documented | Event results or certificate | Omit award status |
| ROLLOVER | 100% constraint compliance / 0% hallucination / 0% demo failure | Documented | Test matrix and scope; distinguish test results from absolute guarantees | State the deterministic design and fallback behavior |
| ROLLOVER | Sub-15ms API latency | Documented | Benchmark method, machine, sample size, and endpoint | “In-memory matching avoids database I/O” |
| ROLLOVER | Ad and walkthrough videos | Described but links are `#` placeholders | Final hosted URLs/files, poster, speech captions or transcript, permissions | Omit video section |
| ROLLOVER | Public repo and visual assets | Public source checked; no cleared captures or repo license | Obtain approved team media; distinguish illustrative stock from real partnerships | Repo link plus decorative cover |
| SGEN | Four-language speech input and read-aloud | Documented | Browser support notes and working demo/code | “Browser speech tools with language options”; avoid universal browser support claims |
| SGEN | Non-blocking feed / pagination performance | Verified page requests, scroll listener, request guard, deduplication, and LIMIT/OFFSET; no throughput measurement | Representative measurement if claiming speed; async Flask alone does not establish worker throughput | Explain the verified mechanism without quantified benefit |
| SGEN | Personal ownership and source/demo | Role from supplied notes; public source checked | Confirm any additional personal modules and obtain cleared team media | Publish documented role, public source link, and decorative cover |
| Resume | Education and current status | Diploma/program documented, dates absent | Confirm exact school/program wording, dates and completion status | Show school/program without dates or “graduated” wording |
| Resume | Current PDF | HTML resume with print styles implemented; local Chrome A4 output verified as one page | Owner review before hosting a standalone PDF | Use browser Print / Save as PDF |
| Identity | Email, GitHub, Singapore | Documented | Confirm current and acceptable to publish | Omit any unapproved detail |

## Media collection brief

For each project, aim for one 16:9 lead image and two supporting captures with a caption explaining what the viewer sees. Export clean high-resolution source captures; crop/compress in the later build. Record who owns the media, whether team members consent to public use, any third-party photo/audio licenses, and alt text. For videos, record duration, host URL, poster, transcript/captions, and whether embedding is allowed. Do not place private API keys, user data, or proprietary information in screenshots.

## Review record template

When an item is checked, add: **claim**, **source URL/file and revision**, **measurement conditions**, **reviewer/date**, and **approved public wording**. This keeps polished case-study copy tied to real evidence even if the original project changes later.

## Phase 2 source and asset checks — 2026-10-10

Reviewed by Codex against public `main` branches. Personal attribution follows the supplied role notes; code inspection confirms mechanisms, not authorship or measured impact.

| Repository / revision | Checked artifact | Public wording decision |
| --- | --- | --- |
| [NumPyGrad](https://github.com/Htet-Aung/numpygrad/tree/1c77ff2e11aef80503e1f9dcc2bd22d23d9db5cb) | MIT license and `docs/studio_decision_boundary.png`, `docs/studio_mnist_canvas.png`, `docs/studio_neural_pathfinding.png` | Show authentic studio captures with alt text, contextual captions, and original-source links. Displayed metrics belong to the captured sessions, not a newly reproduced benchmark. |
| [ROLLOVER](https://github.com/Samuwuwuwu/SGD-Open-Hack-26-CMC/tree/c0c5ece16c7a05516a9b496671b26c9137fe5e33) | README, `services/api/src/domain/matching.js`, preview/reveal contracts, quiz fallback | Describe deterministic inventory rules and server-owned offers. Explicitly identify illustrative inventory/pricing and avoid implying demo brands are partners. No absolute safety, latency, award, or zero-failure claims. |
| [SGEN](https://github.com/Generic-Inc/SGEN/tree/4939187ea1130b4dc5e55958558df58dceba7f5e) | `src/client/src/static/infinite_feed.js`, `src/server/modules/posts.py`, post speech, composition voice, dictionary/link component | Describe page-based loading, in-flight guards, post-ID deduplication, browser-dependent speech, local explanations, and outbound confirmation. Corrected older cursor/observer and async-throughput claims in research notes. |

The NumPyGrad originals are stored in `src/assets/work/numpygrad/`; Astro generates responsive WebP files. The unmodified license is distributed as `public/media/numpygrad-LICENSE.txt`. See [media attribution](../public/media/README.md). No team screenshots or videos were copied from repositories without a license or cleared media. Shades of SG still has no confirmed public source URL; its narrative uses the supplied module notes and separates personal work from team context.

## Phase 3 publication metadata — 2026-10-11

The social preview is authored typography/SVG (`public/social-card.svg`) exported locally to PNG. It contains documented identity and project names and makes no product-screenshot claim. No generated photographic media or outside asset license is involved. Homepage Person/WebSite structured data uses the supplied name, Singapore location, and GitHub profile; it does not invent a title, employer, award, or education status. Canonical URLs, social-image URLs, and sitemap entries use the actual host's build-time `SITE_URL` once selected. The local production fixture's example domain is test data only, not a confirmed public address. Performance measurements in `phase-3-review.md` describe this portfolio's local release fixture, not the project benchmarks in the original research notes.
