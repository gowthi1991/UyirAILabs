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
