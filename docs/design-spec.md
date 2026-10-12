# Portfolio UX and visual specification

**Status:** Planning draft, 2026-10-02. Visual direction is proposed pending Htet’s preference.  
**Companion documents:** [site-plan.md](site-plan.md) for content/scope and [TSD.md](TSD.md) for implementation decisions.

## 1. Experience principles

The site should feel like an engineer’s carefully edited notebook: clear typography, generous space, precise diagrams, and real product evidence. The first screen must immediately say who Htet is, what he builds, and where to go next. Case studies should support two reading speeds: a one-minute skim and a deeper technical read.

Use restrained motion to clarify transitions and link states. ROLLOVER’s playful aesthetic belongs inside that project’s media, while the portfolio shell remains consistent. Do not use arbitrary decoration that competes with project evidence.

## 2. Page layouts

### Home, desktop (viewport ≥ 1024px)

```text
┌──────────────────────────────────────────────────────────────┐
│ Htet Aung Khant                 Work  About  Resume  Contact │
├──────────────────────────────────────────────────────────────┤
│ Eyebrow: Singapore · Full-stack + applied AI                │
│ Large 2–3 line positioning statement                        │
│ Supporting sentence                  [Explore work] [Resume] │
├──────────────────────────────────────────────────────────────┤
│ Three short proof points                                     │
├──────────────────────────────────────────────────────────────┤
│ Selected work                                       01 / 04  │
│ ┌───────────────────────────┐ ┌────────────────────────────┐ │
│ │ NumPyGrad cover           │ │ Shades of SG cover         │ │
│ │ Title / role / outcome    │ │ Title / role / outcome     │ │
│ └───────────────────────────┘ └────────────────────────────┘ │
│ ┌───────────────────────────┐ ┌────────────────────────────┐ │
│ │ ROLLOVER                  │ │ SGEN                       │ │
│ └───────────────────────────┘ └────────────────────────────┘ │
├──────────────────────────────────────────────────────────────┤
│ About preview                                      [About →] │
├──────────────────────────────────────────────────────────────┤
│ Contact: email / GitHub                    © and top link    │
└──────────────────────────────────────────────────────────────┘
```

At 768–1023px keep the hero readable and cards in two columns if content fits. At <768px stack hero actions and project cards in one column. Keep every card’s text visible without hover. The hero should fit within the first screen on a typical laptop but need not force a full-height section.

### Home, mobile (< 768px)

```text
┌──────────────────────────────┐
│ Htet Aung Khant       [Menu] │
├──────────────────────────────┤
│ Singapore · SWE + applied AI │
│ Large headline, 3–5 lines    │
│ Supporting sentence          │
│ [Explore work]               │
│ [View resume]                │
├──────────────────────────────┤
│ Three short proof points     │
├──────────────────────────────┤
│ Selected work                │
│ ┌──────────────────────────┐ │
│ │ Project cover            │ │
│ │ Title, role, summary     │ │
│ │ Read case study →        │ │
│ └──────────────────────────┘ │
│ Repeat for four projects     │
├──────────────────────────────┤
│ About preview                │
│ Email / GitHub / footer      │
└──────────────────────────────┘
```

The menu is a disclosure panel with visible labels, a clear close action, and no full-screen takeover. Keep the name visible while scrolling only if a sticky header does not steal too much vertical space on small screens.

### Case study

```text
Desktop: breadcrumb → title/summary → metadata row → lead media
         short version → [main article 8 columns | sticky contents 3 columns]
         evidence gallery → trade-offs → next project/contact

Mobile:  breadcrumb → title/summary → metadata list → lead media
         short version → compact in-page contents → article
         evidence gallery → trade-offs → next project/contact
```

Keep the article column at 68–76 characters per line. Use actual section headings (`h2` for major parts, `h3` for decisions) and anchors. Sticky contents appear only where the viewport permits; on mobile use a simple “On this page” list near the top. Diagrams should be legible at 320px through horizontal scroll with a visible cue, or be redrawn vertically. Every diagram also gets a short prose explanation.

### About and resume

About opens with a short personal introduction, then a two-column “focus / evidence” area on desktop that collapses to one column on mobile. The resume page uses a single reading column with distinct section headings and plain links; provide print styles so it works as a browser printout even before a PDF exists.

## 3. Design system proposal

### Color

| Token | Proposed value | Use |
| --- | --- | --- |
| Canvas | `#F8F7F3` | Warm light background |
| Surface | `#FFFFFF` | Cards/diagrams |
| Ink | `#171B20` | Main text and high-contrast borders |
| Muted ink | `#4F5962` | Secondary text, never essential labels at low contrast |
| Line | `#CDD2D4` | Dividers and quiet card borders |
| Accent | `#2447C6` | Links, focus, primary action |
| Accent wash | `#E8EDFF` | Selected/hover backgrounds |
| Success/notice | Reserved | Use semantic text/icons, not color alone |

Check final contrast combinations with WCAG 2.2 AA. Avoid putting small white text on accent until measured. Project cover colors may vary by project, but must preserve heading readability. A dark theme is deferred until Htet confirms it matters; token names allow one later.

### Type and spacing

- **Display/body:** Inter, self-hosted with license included, or system sans fallback while assets are pending. Use 400/500/600/700 weights only.
- **Technical labels/code:** IBM Plex Mono, self-hosted with license included, or system monospace fallback. Reserve mono for metadata, code, and small labels; long body copy stays sans.
- Suggested scale: body 16–18px with 1.55–1.65 line height; small text 14px minimum; card title 24–30px; section title 32–48px; hero 48–88px using `clamp()`.
- Spacing base 8px. Layout container maximum 1200px; article maximum 760px. Page gutters 20px mobile, 32px tablet, 48px desktop. Section spacing 64–112px depending on viewport.
- Borders 1px; radius 12–16px for cards, 6–8px for controls. Shadows are subtle and used only to distinguish elevated media/cards.

These are design tokens, not pixel-perfect approval. Create one representative home viewport and one case-study viewport for visual review before implementing every page.

## 4. Reusable UI components and states

| Component | Required content/behavior | States |
| --- | --- | --- |
| Header | Name/home link, Work, About, Resume, Contact | Current page, keyboard focus, mobile menu open/closed |
| Primary/secondary links | Descriptive action text and arrow/icon where useful | Default, hover, focus, visited where meaningful |
| Project card | Authentic cover or typographic cover, title, one-line value, role, stack, case-study link | Default, hover/focus; entire card may be one link without nested links |
| Metadata row | Role, team, technologies, period if confirmed | Wrap/stack at small widths |
| Evidence callout | Metric, context, method/source link | Omit or qualify unverified values |
| Architecture diagram | SVG/image or semantic HTML diagram, caption, text alternative | Responsive and zoom/scroll if needed |
| Media frame | Image/video poster, caption, credit | Loading, missing asset fallback, playback controls |
| Article contents | Section anchors | Active section optional; all links remain usable without JS |
| Footer | Email, GitHub, navigation | Clear external destination/focus |

Do not create fake loading skeletons for static pages. If an external demo is unavailable, omit the control or label its availability accurately. Videos require user-initiated playback, captions or transcript when speech is meaningful, and a poster image. Images need useful alt text; decorative covers get empty alt. External links should be distinguishable, with clear labels.

## 5. Interaction and accessibility rules

- All controls work by keyboard. Focus indication is at least 2px and never suppressed. Mobile navigation can open by tap, Enter, or Space and close by Escape; focus order follows visual order.
- Target 44×44 CSS px for primary tap controls where feasible. Use semantic links for navigation and buttons only for actions.
- Do not hide critical project detail behind hover or animation. Motion is limited to ~150–250ms opacity/position changes; honor `prefers-reduced-motion` with no essential information lost.
- Avoid autoplay, scroll hijacking, animated cursor followers, and parallax. Give in-page anchors scroll margin below a sticky header.
- Do not depend on color alone for status/meaning. Maintain heading order, descriptive link names, visible captions/credits, and skip-to-content link.
- Long code or diagrams may scroll horizontally without overflowing the whole page. Provide copyable plain text where a diagram is technical evidence.
- Check 320, 375, 768, 1024, and 1440px widths; 200% and 400% zoom; keyboard-only; reduced motion; and a screen reader pass before launch.

## 6. Content tone

Write in first person where the ownership is personal and explicitly name teammates or “we” for shared work. Each project opens with the user/problem and Htet’s contribution, then supports it with specific mechanisms. Prefer “I built a review step before image generation so creators could fix lyric timing” over a list of named tools. Explain numbers with test conditions and avoid sales claims like “production-grade” unless the operating context supports them.
