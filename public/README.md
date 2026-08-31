# Handoff: Muhammad Gad — Portfolio (index + per-project case pages)

> ملاحظة: هذا الملف هو الوصف الكامل للتصميم لتنفيذه في كود حقيقي. الملف المرجعي هو
> `design/Portfolio Split.dc.html` (نسخة "صفحة لكل مشروع" — ليست نسخة الصفحة الواحدة).

## Overview

A personal portfolio for **Muhammad Gad**, frontend engineer (Tanta, Egypt), in a Swiss/modernist
editorial style: flat, ruled, zero corner radius, one red accent on an off-white ground, everything
flush left.

Two views:

1. **Index** — hero, availability bar, bio/statement/metrics band, "The Stack", a **ruled list of six
   projects** (one row each), "Experience & Education", contact footer.
2. **Case page** — one project in full: title, long blurb, a **drawn HTML/CSS mockup of that
   project's UI**, a "What it does" ruled feature list, and a sidebar (tech tags, links, next case).

Navigation is client-side: clicking a project row opens its case page; "All work" and the header brand
return to the index.

## About the design files

The files in `design/` are **design references created in HTML** — a prototype showing the intended
look and behaviour, **not production code to copy**. The task is to **recreate this design in a real
codebase** using its own conventions. If no codebase exists yet, the natural target is
**Next.js (App Router) or Vite + React with plain CSS/CSS-modules or Tailwind** — the design uses no
component library, only tokens, rules and grids.

Note on the reference file: it is a "Design Component" — a `<x-dc>` template plus a small logic class,
rendered by `design/support.js`. Treat the template as **JSX-shaped markup**: `{{ x }}` are value
holes, `<sc-for list as>` is `.map()`, `<sc-if value>` is a conditional, `style-hover="…"` is a
`:hover` rule. Do not port that runtime; port the markup, the styles and the data.

Open it locally with any static server from inside `design/` (e.g. `npx serve`), not `file://`.

## Fidelity

**High-fidelity (hifi).** Colors, type, spacing, rules and copy are final. Recreate pixel-accurately
using the tokens below. The only intentionally loose parts are the six **project mockups** — abstract
CSS/flat representations of each app's UI (grey blocks stand for imagery). Keep them as-is, or replace
them with real screenshots later (that is a content decision, not a design change).

---

## Design tokens

Source of truth: `design/_ds/modernist-…/styles.css` (Modernist design system). Copy the `:root` block
verbatim into the target codebase; everything below references it.

### Color

| Token | Hex | Used for |
| --- | --- | --- |
| `--color-bg` | `#f3f2f2` | page ground, text on red |
| `--color-text` | `#201e1d` | all copy, 2px rules, "Open case" chip |
| `--color-accent` | `#ec3013` | statement panel fill, project numbers, dots, primary buttons |
| `--color-accent-700` | `#ae1800` | red text at paragraph size (kickers, cart heading) |
| `--color-divider` | `#201e1d` @ 40% | all rules and 1px borders |
| `--color-surface` | `#eae9e9` | design-system card fill (unused here) |
| `--color-neutral-100` | `#f8f4f4` | mockup panel background |
| `--color-neutral-200` | `#eae7e7` | project row hover |
| `--color-neutral-300` | `#d7d3d3` | image/flag placeholder blocks, inner mockup rules |
| `--color-neutral-600` | `#7d7979` | labels, kickers, meta |
| `--color-neutral-700` | `#605d5d` | secondary copy inside mockups |

Full ramps 100–900 exist for `neutral`, `accent`, `accent-2` (accent-2 is a stand-in — treat the
palette as **mono red**). Never introduce another hue.

### Type

- One family: **Archivo** (`--font-heading` = `--font-body` = `"Archivo", system-ui, sans-serif`),
  weights 400/500/600/700/800/900 — Google Fonts.
- Headings: weight **800**, `line-height` 0.92–1.15, `letter-spacing` −0.02em … −0.035em, uppercase
  for H1/H2.
- Body: 15px / 1.55.
- Label style used everywhere (`h6` and kickers): 11–13px, weight 700, `letter-spacing` 0.08–0.14em,
  `text-transform: uppercase`, color `--color-neutral-600`.

| Role | Size | Weight | Other |
| --- | --- | --- | --- |
| Hero H1 "MUHAMMAD GAD" | `clamp(48px, 8vw, 112px)` | 800 | lh 0.92, ls −0.035em, uppercase, `<br>` between words |
| Hero lede | 20px / 1.4 | 400 | max-width 620px |
| Statement H2 (red panel) | `clamp(30px, 4.6vw, 68px)` | 800 | lh 0.98, ls −0.03em, uppercase, `text-wrap: balance` |
| Section H2 ("The Stack", "Experience & Education") | `clamp(34px, 4.4vw, 60px)` | 800 | uppercase, ls −0.03em |
| Section H2 ("Work") | `clamp(28px, 3.4vw, 44px)` | 800 | uppercase |
| Project row title | 26px | 800 | lh 1.1, ls −0.02em |
| Case page H1 | `clamp(34px, 5vw, 68px)` | 800 | lh 1, ls −0.03em |
| Case blurb | 19px / 1.5 | 400 | max-width 680px |
| Feature list item | 15px / 1.5 | 400 | — |
| Metric numbers ("06", "02") | 46px | 800 | lh 1 |
| Metric words ("React / Next.js") | 26px | 800 | lh 1.1, `<br>` separated |

### Spacing, radius, elevation

- Spacing scale: 4 / 8 / 12 / 16 / 24 / 32 px (`--space-1…8`); the layout also uses 40, 56, 64, 72.
- **`--radius-*` is 0px. Nothing is rounded, ever.**
- Shadows exist as tokens but **this design uses none** — separation is by rule, not elevation.
- Rules: **2px solid `--color-text`** = strongest (top of the project list, mockup frames);
  **2px solid `--color-divider`** = section separators; **1px solid `--color-divider`** = row/cell
  separators and control borders; **1px solid `--color-neutral-300`** = rules inside mockups.
- Page shell: `max-width: 1200px; margin: 0 auto; padding: 0 40px`.

---

## Screens

### 1. Header (both views, sticky)

- `position: sticky; top: 0; z-index: 20`, background `--color-bg`, `border-bottom: 2px solid --color-divider`.
- Inner: shell width, `padding: 14px 40px`, flex, `space-between`, `gap: 24px`.
- **Left (clickable → index):** 32×32 red square, ground-colored `MG`, heading font 900/13px; then
  `MUHAMMAD GAD`, 800/14px, ls 0.02em.
- **Right:** breadcrumb label — `Portfolio` on the index, `Case study` on a case page — 12px/600,
  ls 0.1em, uppercase, `--color-neutral-600`; then the **Download CV** button:
  `.btn .btn-primary` (red fill, ground text), `padding: 9px 13px`, 12px, ls 0.06em, `white-space: nowrap`,
  Lucide `download` icon 15px, `gap: 8px`, `href` = the CV PDF with the `download` attribute.

### 2. Index

Order top to bottom:

1. **Hero** — `padding: 56px 0 32px`, bottom 2px divider. Kicker `Frontend Engineer — Tanta, Egypt`
   (12px/700, ls 0.14em, uppercase, `--color-accent-700`), H1, lede:
   *"React and Next.js interfaces — production dashboards, server-rendered booking flows, and Chrome
   extensions that give people their attention back."*
2. **Availability bar** — `padding: 14px 0`, bottom 2px divider, flex `gap: 14px`: a 10×10 red square +
   `OPEN TO FRONTEND ROLES — REMOTE OR ON-SITE` (12px/700, ls 0.12em, uppercase). Rendered behind a
   boolean (`available`).
3. **Bio band** — 3-column grid `260px | 1fr | 240px`, `gap: 0`, 1px dividers *between* columns
   (right border on the first two), bottom 2px divider.
   - Col 1 (`padding: 40px 32px 40px 0`): `Biography` label + paragraph; `Contact` label + email /
     phone / `Tanta, Al-Gharbia, Egypt`; `What I do` label + four lines (Web app engineering /
     Design-to-React implementation / Chrome extension development / Performance & state architecture).
   - Col 2 (`padding: 40px 32px`): the **red statement poster** — `--color-accent` fill, ground text,
     `min-height: 560px`, `padding: 40px`, column flex `space-between`: `STATEMENT` label (opacity .8),
     H2 *"Interfaces that respect your attention."*, then a footer row above a
     `2px solid rgba(243,242,242,.5)` rule with the 14px line *"No dark patterns, no needless motion,
     no waiting on a spinner that could have been server-rendered."* and `MG` (900/13px, ls 0.1em).
   - Col 3 (`padding: 40px 0 40px 32px`, grid `gap: 34px`): four metrics — Core stack `React / Next.js`,
     Shipped projects `06`, Chrome extensions `02`, Typed codebases `TypeScript / first`.
4. **The Stack** (`id="stack"`) — H2 + right label `TOOLS I REACH FOR DAILY`; a 2px top rule, then one
   row per category: grid `300px | 1fr`, `gap: 32px`, `padding: 22px 0`, 1px bottom rule. Left: red
   `01`-style number (12px/700) + category name (800/19px). Right: wrapping flex of chips —
   `padding: 8px 12px`, 1px divider border, 13px/600, each with a 17×17 monochrome brand icon
   (`https://cdn.simpleicons.org/<slug>/201e1d` as a `background-image`).
5. **Work** — H2 `WORK` + right label `SIX PROJECTS — OPEN ONE FOR THE FULL CASE`; 2px `--color-text`
   top rule; one **row per project**: grid `56px | 1.05fr | 1fr | 150px`, `gap: 24px`,
   `padding: 26px 0`, 1px bottom rule, `cursor: pointer`, hover `background: --color-neutral-200`.
   Cells: red number (900/15px) · kind label + title (800/26px) · one-line summary (15px/1.5) ·
   stack line (11px/700 uppercase) + `OPEN CASE →` chip (`--color-text` fill, ground text,
   11px/800, ls 0.1em, `padding: 7px 10px`).
6. **Experience & Education** (`id="path"`) — H2 + right label `2020 — PRESENT`; 3 equal columns
   between 2px rules, 1px dividers between columns, each: period label, H4 22px, org line 14px
   `--color-neutral-700`, paragraph 15px/1.55. Content: B.Sc. Aerospace Communication (Beni-Suef
   University, 2020–2025) · Frontend Developer Intern (Almdrasa — Remote, Nov 2023 – May 2024) ·
   Independent Product Work (Self-directed, 2024 – present).
7. **Contact footer** — 2px top rule, `padding: 48px 0 64px`, 3 columns `gap: 24px`: Email / Phone /
   Elsewhere, each a label + a link in heading font 800/17px (`gad.software@outlook.com`,
   `+20 106 942 9820`, `github.com/GADMuhammad`).

### 3. Case page

- **Back control** — `padding: 28px 0`: `← ALL WORK`, 12px/800, ls 0.1em, uppercase, 1px divider
  border, `padding: 9px 12px`, pointer.
- **Body** — 2px `--color-text` top rule, `padding-top: 32px`, grid `1fr | 300px`, `gap: 48px`,
  `align-items: start`.
  - **Main column:** `NN — <kind>` label; H1 title; blurb 19px/1.5; the project **mockup panel**; then
    `WHAT IT DOES` label (`margin: 36px 0 4px`) and the feature list — 1px top rule, each item a
    `18px | 1fr` grid, `gap: 12px`, `padding: 12px 0`, 1px `--color-neutral-300` bottom rule, a red
    `—` marker, text 15px/1.5.
  - **Sidebar (`<aside>`):** `border-left: 1px solid --color-divider`, `padding-left: 28px`,
    grid `gap: 28px`.
    - `BUILT WITH` + wrapping `.tag.tag-outline` chips, 12px, `padding: 4px 8px`, `white-space: nowrap`.
    - Buttons, stacked `gap: 10px`, all `justify-content: flex-start`, `gap: 10px`, `padding: 12px 14px`,
      13px, each with a 16px Lucide icon: **View on GitHub** (`.btn-secondary`, github glyph) ·
      **Landing page / Live site / Live dashboard** (`.btn-secondary`, or `.btn-primary` when it is the
      last button, `external-link` glyph) · **Chrome Web Store** (`.btn-primary`, chrome glyph) — so the
      **last button in the stack is always the red one**.
    - `NEXT CASE` + the next project's title in heading font 800/17px with `→`, pointer, wraps around.

### 4. The six project mockups (main column of each case page)

Each is one panel: `border: 2px solid --color-text`, `background: --color-neutral-100`,
`padding: 20px`, marked `data-om-raster="true"` (export hint only). Inside, everything is flat CSS —
grey `--color-neutral-300` blocks for imagery, 1px rules, 8–14px type. Summary of each:

| # | Project | Mockup contents |
| --- | --- | --- |
| 01 | YouTube Tweak | Two stacked figures: **List → Grid** comparison of search results (1fr / 28px arrow / 1fr) plus four feature chips; and **infinite scroll vs. Load More** side by side, three video rows each (66px thumb + 2 text lines) |
| 02 | Bookmarks Finder | Extension popup: search field with a typed query, then 7 result rows — 26px favicon square (Simple Icons), title + URL, `⌘1…⌘7` hint — and a Google fallback row |
| 03 | Wild Oasis Admin | Dashboard: 4 stat cards (Bookings 12, Sales, Check-ins, Occupancy); then `1.35fr / 1fr` — "Today" activity rows (58px status chip + guest + nights) and stay-duration bars (62px label + bar + value); then a 5-column bookings table (`44px 1.2fr 1.1fr 88px 74px`) with a 2px header rule |
| 04 | Wild Oasis Guest | Cabin catalogue: filter chips (All / 1–3 / 4–7 / 8–12) + 2×2 cabin cards (52px image strip + name, capacity, price); then a reservation panel: June 2024 7-column calendar with a booked black range (10–23) and a price breakdown |
| 05 | Product List with Cart | Dessert shop: `1.5fr / 1fr` — a 3-column dessert grid (image block, kind, name, price) and the cart column: `YOUR CART (3)` in `--color-accent-700`, three rows (name, `2 × $5.50`, line total), order total, and a `CONFIRM ORDER` bar |
| 06 | The World Countries | `Where in the world?` header + `Dark mode ●`; search + region dropdown row; 4 country cards (flag block, name, population, region · capital); then a detail strip: 96px flag, `Belgium`, native name / TLD / currency / languages, and three border chips (France, Germany, Netherlands) |

---

## Interactions & behaviour

- **Open a case:** click anywhere on a project row → case page for that project, `window.scrollTo(0, 0)`.
- **Back:** `← ALL WORK` or the header brand → index, scroll to top.
- **Next case:** sidebar link → `(currentIndex + 1) % 6`, scroll to top.
- **Hover:** project rows tint `--color-neutral-200`; links go from `--color-text` to `--color-accent`;
  `.btn-primary` uses the accent ramp one step darker (`#dd2b0f`), `.btn-secondary` a 7% ink tint;
  pressed states one step further. Button text color is pinned (`.btn-primary` stays ground-colored on
  hover) so the global link hover never bleeds into buttons.
- **Focus:** `:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px }` — never
  the browser default.
- **External links:** `target="_blank"`. **CV:** `download` attribute on the PDF.
- **No animation** anywhere. No loading or error states — the page is static content.
- **Recommended improvement when implementing:** give each case a real route
  (`/work/[slug]`, e.g. `/work/youtube-tweak`) instead of in-component state, so cases are linkable,
  server-rendered and SEO-visible. Project rows then become `<Link>`s and the whole index/case switch
  disappears.

### Responsive behaviour (as built)

Reference implementation tags containers with `data-r="…"` and switches them in two media queries:

**≤ 1000px**
- `bio` (3-col), `two` (stack rows), `three` (experience + footer), `case` (main+sidebar), `pair`
  (2-col mockup figures) → **single column**; inter-column right borders become bottom borders and
  side padding is dropped.
- `case` keeps `gap: 32px`; `pair` keeps `gap: 16px`.
- The sidebar loses its left border and gains `border-top: 2px solid --color-divider; padding-top: 24px`.
- Project rows go from 4 columns to `40px | 1fr` (`gap: 6px 16px`), so kind+title, summary and
  stack+chip stack under each other.

**≤ 700px**
- Shell padding 40px → 20px; mockup panel padding 20px → 14px.
- 4-up grids (dashboard stats, country cards) → 2 columns.
- Header breadcrumb hidden (brand + CV button remain).
- The 5-column bookings table sits in a horizontally scrollable wrapper (`overflow-x: auto`, children
  `min-width: 460px`).

In a real codebase, express these as normal media queries / container queries on real class names —
`data-r` is only a device for the inline-styled prototype.

---

## State

Trivial: **one** piece of state.

```
open: number | null   // null = index, 0–5 = project index
```

Derived: `current = PROJECTS[open ?? 0]`, `nextIdx = (open ?? 0) + 1 mod 6`,
`crumb = open === null ? "Portfolio" : "Case study"`. No data fetching — all content is static and
lives in the `PROJECTS` array plus a handful of mockup sample arrays (`countries`, `desserts`,
`cartRows`, `cabins`, `calendar`, `dashStats`, `todayRows`, `stayBars`, `bookingRows`, `mockRows`,
`compareRows`, `tweakChips`, `stack`) in the logic class of the reference file — copy them from there.

---

## Content data

### Person

- **Muhammad Gad** — Frontend Engineer, Tanta, Al-Gharbia, Egypt.
- `gad.software@outlook.com` · `+20 106 942 9820` · `github.com/GADMuhammad`
- Metrics: 6 shipped projects, 2 Chrome extensions, React/Next.js core, TypeScript-first.

### The Stack (categories → chips)

Copy verbatim from the reference file's `stack` array (each chip carries a Simple Icons slug):
Languages & core · Frameworks · Data & state · Styling · Tooling & platform.

### Projects (index order)

| # | Title | Kind | Stack line | Links |
| --- | --- | --- | --- | --- |
| 01 | YouTube Tweak — Control YouTube and make it calmer | Chrome Extension — v1.2.0 | React · TS · Plasmo | [repo](https://github.com/GADMuhammad/Youtube-Tweak) · [landing](https://you-tube-tweak-landing-page.vercel.app/) · [store](https://chromewebstore.google.com/detail/youtube-tweak-control-you/oboblbfbeolffgmhmgkjaaamelcmncoi) |
| 02 | Bookmarks Finder | Chrome Extension | React · TS · Plasmo | [repo](https://github.com/GADMuhammad) · [landing](https://bookmarks-finder-landing-page.vercel.app/) · [store](https://chromewebstore.google.com/detail/bookmarks-finder/gnoinjapogncnbjdflkjlnbhblnnbpch) |
| 03 | The Wild Oasis — Admin Dashboard | Full-stack Dashboard | React · TanStack · Supabase | [repo](https://github.com/GADMuhammad) · [live dashboard](https://the-wild-oasis-admin-dashboard-2cly-gold.vercel.app/dashboard) |
| 04 | The Wild Oasis — Guest Website | Next.js Product Site | Next.js · NextAuth · Supabase | [repo](https://github.com/GADMuhammad) · [live site](https://the-wild-oasis-xuae.vercel.app/) |
| 05 | Product List with Cart | React Interface | React 19 · Framer Motion | [repo](https://github.com/GADMuhammad/Product-list-with-cart) · [live site](https://product-list-with-cart-drab-nine.vercel.app/) |
| 06 | The World Countries | React SPA | React · Fuse.js · Router | [repo](https://github.com/GADMuhammad/REST-Countries-API-with-color-theme-switcher) · [live site](https://rest-countries-api-with-color-theme-seven-zeta.vercel.app/) |

Each project object carries: `num`, `kind`, `title`, `short` (index row), `stackLine`, `blurb` (case
page), `points[]` (the "What it does" list — 4 to 13 items, **use them verbatim**), `tech[]` (sidebar
tags), `href`, optional `landing` + `landingCta`, optional `store`. The full text is in
`design/Portfolio Split.dc.html` in the `PROJECTS` array — treat that array as the content source and
port it as-is (later it can move to MDX/CMS).

Tech tags as listed per project: 01 React, TypeScript, Plasmo, Sass, plasmohq/storage, Chrome Storage
API · 02 React, TypeScript, Plasmo, Chrome Extension APIs · 03 React, React Router, Vite, TanStack
Query, Supabase, Tailwind CSS, Motion, Recharts, date-fns · 04 Next.js (App Router), NextAuth v5,
Supabase, Tailwind CSS, Styled Components, date-fns, heroicons · 05 React 19, Vite, Tailwind CSS,
Framer Motion, react-toastify, Ionicons · 06 React 19, Vite 6, React Router 7, Tailwind CSS 3,
react-select, Fuse.js, styled-components.

---

## Assets

- **Fonts:** Archivo from Google Fonts, weights 400–900 (`https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&display=swap`). Self-host in production.
- **UI icons:** [Lucide](https://lucide.dev) — inline SVG, `stroke-width: 2`, `currentColor`
  (download, github, external-link, chrome/target).
- **Brand/tech icons:** [Simple Icons](https://simpleicons.org) via
  `https://cdn.simpleicons.org/<slug>/201e1d`, used as `background-image` at 17px (stack chips) and
  15px (Bookmarks Finder mockup rows). Vendor these locally in production rather than hot-linking.
- **CV:** `assets/Muhammad-Gad-CV.pdf` — served from the header button.
- **No photography.** All imagery in the mockups is intentional grey blocks.

## Files in this bundle

```
README.md                                  ← this document
design/Portfolio Split.dc.html             ← the design (index + 6 case pages)
design/support.js                          ← runtime that renders the .dc.html (do not port)
design/_ds/modernist-…/styles.css          ← design tokens + component classes (btn, tag, table…)
design/_ds/modernist-…/_ds_bundle.js       ← design-system component bundle
design/_ds/modernist-…/readme.md           ← the Modernist design system's own guide
assets/Muhammad-Gad-CV.pdf                 ← linked from the header
```

## Modernist rules to respect while implementing

- Zero border radius, anywhere.
- Nothing centered: headings, copy, and **button labels are flush left** (a wide button starts its
  label at the left padding edge).
- Separation by rules, not shadows or cards; do not thin the 2px rules into hairlines.
- Red is used sparingly — the statement poster, project numbers, the primary button, small emphasis.
  Red paragraph-size text uses `--color-accent-700`, not `--color-accent`.
- One family (Archivo) throughout; no second accent hue; no gradients; no emoji.
