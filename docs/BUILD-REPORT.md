# Build report

(Written by Claude Code during the build.)

---

## Task 01 — plan

- `git init`, `.gitignore`, commit the pack on `main`, branch `build/overnight`.
- Astro 5 static + TypeScript strict (`astro/tsconfigs/strict`), `@astrojs/sitemap`, `@vercel/analytics`; `npm run build` = `astro check && astro build`.
- `scripts/build-tokens.mjs` → `src/styles/tokens.css`: `@font-face` ×3, static tokens (space, radius, families, `--fs-*`/`--lh-*` per type style, `--nn-*`), dark theme on `:root, .theme-dark`, light on `.theme-light` (every colour + shadow re-declared per theme so aliases resolve inside nested themes), `.t-*` utility per type style. Wired to `predev`/`prebuild`.
- `src/styles/global.css`: reset, body on surface-100/ink, `.container` (1200px + gutter), focus ring, dot grid, skip link, reduced-motion block, gutter steps per breakpoint.
- `src/data/company.ts` (facts + TODO fields incl. `NATIVE_NIGHTS_URL`, derived `whatsappUrl`, `mailto`).
- UI parts: `Icon`, `Button` (primary/secondary/text), `Label`, `LiveDot`, `Pill`, `Chip`, `SectionHeading`.
- `layout/Header.astro` (+ `scripts/nav.ts` hamburger < 1024px, Escape closes, no-JS fallback shows links inline), `layout/Footer.astro`, `BaseLayout.astro` (meta, canonical, OG/Twitter, favicon, font preloads, skip link), `index.astro`.

## Task 01 — result

**Built:** everything in the plan. `npm run build` passes (astro check: 0 errors, 0 warnings). Dev server renders header and footer matching the reference at 1024px+.

**Could not verify:** real-device rendering; screen reader pass on the mobile menu.

**TODOs:** `company.ts` → `linkedinUrl`, `whatsappNumber`, `NATIVE_NIGHTS_URL`, `gstin` (links/lines hidden while empty).

## Task 02 — plan

- `sections/Hero.astro`: dot-grid dark hero, typing eyebrow, three-line `display-hero` headline (line-strong → ink-muted → ink) with the green sweep on line 3, subline, primary "Start a project" (`shadow-glow` + sheen loop) and "See Firro" text link; staggered `rise` entrance.
- `mockups/CircuitTraces.astro`: the reference's 10 traces, travelling packets (`stroke-dashoffset`) and end-node blinks (opacity overlay, not stroke/fill animation), `aria-hidden`.
- `sections/ProductFrame.astro`: `<figure>` with rotating border beam (rotating conic layer behind an inset panel — transform only), scan line, `FirroAdminMock`, caption "Illustrative data"; overlaps the light sheet by `--hero-overlap` (280px).
- `mockups/FirroAdminMock.astro` + `FirroAssist.astro`: sidebar, KPI cards, prep table, AI assist column; `role="img"` + descriptive `aria-label`.
- `sections/StoryCycle.astro` + `scripts/story-cycle.ts`: two-tone heading, three statement `<button aria-pressed>`s, `KitchenIllustration` + floating dark `StoryCard` (label/state change with the step, `aria-live="polite"`). Sticky in a 300vh wrapper on wide + tall screens; click scrolls to that step.
- `sections/RouteCards.astro`: three cards, copy from the reference.
- `index.astro`: hero + light sheet (`theme-light`, radius-2xl top corners).

## Task 02 — result

**Built:** all of the above; build passes. Checked in the browser at 1440×900: hero matches the reference, the frame overlaps the sheet, the story pins and the active step/card label follow scroll (step 2 → "First pass ready / awaiting review").

**Could not verify:** real devices; screen reader announcement of the story card change.

**Notes:** typing effect reveals characters by opacity (width animation is not an allowed property); the full eyebrow text is in a visually-hidden span for screen readers.
