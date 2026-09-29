IMPORTANT: Follow CLAUDE.md file strictly for all code generation.

## WORKFLOW
1. Read CLAUDE.md, design/brand-book.md, design/tokens.json and the parts of reference/home-design.dc.html named below.
2. Reply with a PLAN only: files to create/change, approach, questions. Do not write code yet.
3. Wait for me to reply "proceed". Never skip plan verification.
4. Implement on branch `task01/feature/scaffold`, run `npm run build` and `npm run dev`, then report: what was done, what could NOT be verified, anything added to docs/TECH-DEBT.md.

## Task 01 — Scaffold, tokens, layout, header and footer

**Goal:** an Astro 5 static site that builds, with the design tokens, fonts, base layout, header and footer matching the reference.

0. The folder is not a git repo yet: run `git init`, add a `.gitignore` (node_modules, dist, .env, .astro, .vercel), commit the pack as-is on `main` ("chore: add handoff pack"), then create the task branch.
1. Create the Astro 5 project (TypeScript strict, static output) in this folder, keeping existing folders (design/, reference/, public/, content/, docs/, prompts/).
2. `scripts/build-tokens.mjs`: read `design/tokens.json` and write `src/styles/tokens.css`:
   - colours: dark values on `:root`, light values on `.theme-light` (aliases like `{pulse}` become `var(--pulse)`);
   - spacing, radius, shadow (per theme) as custom properties; add `--space-30: 120px` if missing;
   - one utility class per type style (`.t-display-hero`, `.t-heading`, `.t-label` …) with family, size, line-height, weight, letter-spacing (label is uppercase);
   - `@font-face` for the three variable fonts in `public/fonts/`;
   - add `--nn-plum: #7E305A; --nn-lavender: #DBD1EB;`.
   Wire it as `prebuild` and `predev` npm scripts.
3. `src/styles/global.css`: reset, body on `--surface-100` / `--ink`, `:focus-visible` rules (see CLAUDE.md), `prefers-reduced-motion` block, `.theme-light` sections.
4. `src/data/company.ts` with: legal name "Uyir AI Labs Private Limited", CIN U62011TZ2025PTC036108, Udyam UDYAM-TN-03-0340943, address "No. 1, KKR Nagar, Perumal Koil Street, Vadavalli, Coimbatore, Tamil Nadu 641041", email "hello@uyirailabs.com", DPIIT recognised = true, GSTIN = null (pending; render nothing when null), LinkedIn URL = "" (TODO), WhatsApp number = "" (TODO), NATIVE_NIGHTS_URL = "" (TODO). Empty values must hide the related link or button, never render a dead link.
5. `BaseLayout.astro`: `<html lang="en">`, meta viewport, title/description/canonical/OG props, favicon `uyir-favicon.svg`, preload Sora + Manrope, `<header>`, `<main>`, `<footer>`.
6. Raster images are already in `src/assets/` (Native Nights screenshot). Keep all future raster images there; `public/` is for SVG, fonts and static files only.
7. Header (reference: the `<header>` element): logo `uyir-logo-dark.svg` (height 40), nav links Products, Services, Work, About (anchors), secondary button "Investors", primary button "Start a project". Below 1024px: hamburger `<button aria-expanded>` opening a full-width panel.
8. Footer (reference: the `<footer>` element): lockup, DPIIT and Udyam pills, four link columns, legal line from `company.ts`, Privacy/Terms links, © year generated.
9. `index.astro` with just header/footer and an empty `<main>` for now.
