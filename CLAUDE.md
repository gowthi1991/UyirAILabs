# CLAUDE.md — uyirailabs.com

Governance for all code in this repository. Read it fully before planning or writing code. When this file and a prompt disagree, stop and ask.

## What this is

The public website of **Uyir AI Labs Private Limited** (Coimbatore, India): a parent-company marketing site presenting two products (Firro, flagship; Native Nights, second product) and IT services. Audiences: investors and businesses looking for IT services. It is a static marketing site with enquiry forms. No accounts, payments or app logic.

## Workflow (mandatory)

1. **Plan first.** For every task, reply with a written plan: files to create or change, approach, open questions. Then STOP.
2. **Wait for the word "proceed"** before writing or changing any file. Never skip plan verification.
3. **One task at a time.** Finish, report what was done and what could not be verified, then wait.
4. **Honest status.** Say "not verified" rather than "done" when something could not be checked (e.g. a real device, a live form submission).
5. **Open-file hygiene.** When you modify a file, fix every visible violation of this CLAUDE.md in that file in the same pass (hardcoded hex, off-scale spacing or radius, missing alt text, missing focus styles, inline font sizes). Anything needing other files goes into `docs/TECH-DEBT.md`.

## Autonomous mode (overrides the Workflow above only when invoked)

When a prompt starts with **AUTONOMOUS MODE**, for that run:
- Do NOT stop for plans or "proceed". Write the plan for each task into `docs/BUILD-REPORT.md`, then implement it immediately.
- When a decision is needed, choose the option that best fits this CLAUDE.md and the brand book, log it in `docs/DECISIONS.md` (decision, options considered, why), and continue. Never stop to ask.
- Missing content (founder photo, URLs, phone numbers): use the fallback defined in the task (monogram, hidden button) and log it as a TODO. Never invent facts.
- Work on ONE branch `build/overnight` created from `main`, with one commit per task (`feat(taskNN): …`). Do not merge into `main`.
- After each task: `npm run build` must pass before committing. If it fails, fix it (up to 3 attempts); if still failing, commit what works, log the failure in the report, and move on to the next task.
- Never: `git push`, deploy, run `vercel`, change DNS, create accounts, add secrets, delete files outside this repo, or add dependencies beyond the Tech stack table.
- The "Wait for proceed" rule resumes as soon as the autonomous run ends.

## Tech stack (fixed)

| Area | Choice |
| --- | --- |
| Framework | **Astro 5**, static output (`output: 'static'`) |
| Language | TypeScript (strict) |
| Styling | Plain CSS: `src/styles/tokens.css` (CSS custom properties generated from `design/tokens.json`) + component-scoped `<style>` in `.astro` files. **No Tailwind, no CSS-in-JS, no UI kits.** |
| JavaScript | Vanilla TS in small `<script>` blocks, only where needed (menu, story cycling, scroll reveals, form submit). No React/Vue islands in v1. |
| Fonts | Self-hosted variable woff2 in `public/fonts/` (Sora, Manrope, JetBrains Mono). `font-display: swap`; preload Sora and Manrope only. |
| Forms | **Web3Forms** (email delivery). Access key in env var `PUBLIC_WEB3FORMS_KEY`. |
| SEO | `@astrojs/sitemap`, per-page `<title>`/description/canonical/Open Graph, JSON-LD, `public/robots.txt`, `public/llms.txt` |
| Analytics | Vercel Web Analytics (`@vercel/analytics`), no cookies |
| Hosting | Vercel (free tier), domain uyirailabs.com |
| Package manager | npm |

Do not add dependencies beyond these without asking.

## Design system (source of truth)

- `design/tokens.json` = every colour, type style, spacing step, radius and shadow. `design/brand-book.md` = how to use them.
- `reference/home-design.dc.html` = the approved Home page design (a design-tool file, 1440px desktop). Treat its markup as a **visual reference only**: copy structure, copy text, sizes and motion, but rebuild it as clean Astro components. Ignore its `<x-dc>`, `{{ }}` holes, `sc-for`, `data-props` and `DCLogic` script: those belong to the design tool.
- Generate `src/styles/tokens.css` from `design/tokens.json` with a small script (`scripts/build-tokens.mjs`, run on `prebuild`). Dark theme is the default (`:root`); light values under `.theme-light`.

### Hard rules

- **No hardcoded colours** in components: use `var(--token)`. The only exception is the Native Nights band, which uses its own brand colours defined once as `--nn-plum: #7E305A` and `--nn-lavender: #DBD1EB` in `tokens.css`.
- **Spacing** only from the scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 120 px (`--space-*`).
- **Radius** only: 6, 10, 16, 24, 48, 999 px (`--radius-sm|md|lg|xl|2xl|pill`).
- **Type** only the named styles (display-hero, display-xl, display-lg, heading-lg, heading, title, body-lg, body, button, small, label, code). Headings are Sora 500.
- **One primary button style** everywhere: pulse fill, on-pulse label, `button` type, radius-md, 48px tall. Secondary = line-strong outline.
- **Logo:** use the SVGs in `public/brand/` exactly. Never recolour parts of the logo, never retype the wordmark. Header uses `uyir-logo-dark.svg`; footer `uyir-lockup-dark.svg`; favicon `uyir-favicon.svg`.

### Accessibility (WCAG 2.2 AA, non-negotiable)

- Text contrast 4.5:1 (3:1 for 24px+). Use the tokens as specified; do not lower opacity on text.
- Every interactive element: real `<a href>` or `<button>`, visible `:focus-visible` ring (2px `--focus`, 2px offset; `--focus-on-pulse` on pulse buttons).
- Target size ≥ 24×24px (44px on touch layouts).
- All images have meaningful `alt` or `alt=""` if decorative; decorative SVGs `aria-hidden="true"`.
- One `<h1>` per page; logical heading order; landmarks (`header`, `nav`, `main`, `footer`).
- Motion: all animation disabled under `prefers-reduced-motion: reduce`.

### Performance budget

- Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- LCP < 2.5s, CLS < 0.1 on a mid-range Android over 4G.
- Total JS shipped ≤ 30 KB (gzipped). Animations use only `transform`, `opacity`, `stroke-dashoffset` or background-position.
- Images: raster images live in `src/assets/` (NOT `public/`) and render with Astro `<Image>` (AVIF/WebP, explicit width/height, lazy below the fold). `public/` holds only SVG logos, fonts, favicon, OG image, robots/llms/sitemap files.
- Looping animations: only the set listed in `design/brand-book.md` ("Motion"). Each loop pauses when off-screen (IntersectionObserver toggles a `.is-offscreen` class that sets `animation-play-state: paused`).
- Measure Lighthouse on `npm run build && npm run preview`, never on the dev server.

## File size limits

- `.astro` component: ≤ 200 lines. Split sections into `src/components/sections/*.astro` and small parts into `src/components/ui/*.astro`.
- Page file: ≤ 120 lines (composition only).
- Any script block: ≤ 80 lines; larger logic goes to `src/scripts/*.ts`.
- CSS per component: ≤ 150 lines.

## Structure

```
src/
  layouts/BaseLayout.astro      head, fonts, meta, JSON-LD, header, footer, analytics
  components/ui/                Button, Label, Pill, Chip, Card, Icon, SectionHeading (two-tone)
  components/sections/          Hero, StoryCycle, RouteCards, Firro, NativeNights, Services, Work, Insights, Process, Founder, InvestorBand, ContactCTA
  components/mockups/           FirroAdminMock, PosMini, AdminMini, CustomerMini, DeliveryMini, KitchenIllustration, FounderMonogram
  pages/index.astro, privacy.astro, terms.astro, 404.astro, thanks.astro
  assets/                       raster images (native-nights-landing.png, founder.jpg when supplied)
  scripts/                      story-cycle.ts, reveal.ts, contact-form.ts, nav.ts
  styles/tokens.css (generated), global.css
design/  reference/  content/  docs/  public/
```

## Content rules

- Copy comes from `reference/home-design.dc.html` and `content/*.md`. Do not invent facts, numbers, clients or claims.
- Product mockups use illustrative data; add the caption "Illustrative data" under the Firro admin mockup.
- Company facts (name, CIN, Udyam, address) live in one file, `src/data/company.ts`, used by footer, JSON-LD and legal pages.

## Git

- Branch per task: `taskNN/feature/<name>` (e.g. `task01/feature/scaffold`). One commit per task. Gowtham reviews and merges.
