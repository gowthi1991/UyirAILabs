# Decisions log

Decisions taken during builds. Newest first.

| # | Task | Decision | Options considered | Why |
| --- | --- | --- | --- | --- |
| 17 | 03 | Service cards link to `/?intent=project#contact`; "Explore Firro" links to `/#work` (the Firro case study) | Self-links to `#services` / `#firro` as in the reference | A card with an arrow must go somewhere; self-links are dead links. |
| 16 | 03 | "All services" and "All insights" buttons omitted | Keep them pointing at their own section | No index pages exist in v1; a button that goes nowhere fails the launch checklist ("no `#` placeholders"). Logged in TECH-DEBT. |
| 15 | 03 | Small card titles (Firro app tiles, "Now building" rows) use the `button` style (15/20, 700) | `title` (20px) or an ad-hoc 16px bold | Reference uses 16px bold, which is not a named style; `title` wrapped the tile headers. |
| 14 | 03 | Drawn mockups/illustrations keep their own tiny geometry (e.g. 2px toggle knob inset, 150px screens) | Force every inner offset onto the spacing scale | These are pictures of UI, not layout; the scale still governs all real layout spacing. |
| 13 | 02 | Story is sticky only at ≥1025px wide AND ≥820px tall with motion allowed and JS on; otherwise static with step 1 active and click-to-switch | Sticky on every desktop | The pinned layout is ~800px tall; on short laptop screens it would be cut off. |
| 12 | 02 | Hero subline uses `body-lg` (18/28) | Reference's 20/30 | 20/30 is not a named style; brand book says body-lg is for hero sublines. |
| 11 | 02 | Mockup micro-text (KPI labels, tags, mock buttons) uses `label`/`small`/`title`/`heading` styles | Reference's ad-hoc 12px bold Manrope | "Type only the named styles." |
| 10 | 02 | `--hero-overlap: 280px` (120px ≤767px) as one variable shared by the frame and the sheet | Literal 280px in two places | 280px is set by the task, not the spacing scale; one named value keeps both sides in sync. |
| 9 | 02 | Loops not on the brand-book list are drawn still: tiffin steam, hex-module pulse, founder orbit | Port them as in the reference | Brand book v3: "No other looping effects"; Task 05 says remove any loop not on the list. |
| 8 | 02 | All loops/entrances re-implemented with transform / opacity / stroke-dashoffset / background-position only (beam = rotating conic layer; blink = opacity overlay; typing = per-character opacity; live-dot pulse = scaling halo) | Port the reference keyframes as is (they animate `--beam`, `width`, `stroke`/`fill`, `box-shadow`, `filter`) | CLAUDE.md performance budget restricts animated properties. |
| 7 | 02 | Labels that the reference coloured `#EDEFF3` on light surfaces use `--ink` | Keep the reference colour | On the light sheet that value is near-invisible; brand book says labels are always `ink`. |
| 6 | 01 | Header/Footer live in `src/components/layout/` | `sections/` (Home-only), `ui/` (small parts) | They are site chrome used by every page, not Home sections or small parts; CLAUDE.md's tree has no slot for them. |
| 5 | 01 | Chips and pills use the `label` type style with `text-transform: none` | A new 12px mono style | "Type only the named styles"; the reference sets chips in 12px mono with case as written. |
| 4 | 01 | Gutter steps: 120px ≥1280, 64px ≥1024, 48px ≥768, 24px below | 120 → 24 in one jump | 120px margins leave too little width at 1024–1279; all values are on the spacing scale. |
| 3 | 01 | Commit generated `src/styles/tokens.css` | gitignore it | Reviewable diff when tokens change; it is regenerated on every `dev`/`build` anyway, so it cannot drift in production. |
| 2 | 01 | `@astrojs/check@0.9.4` + `typescript` as devDependencies, pinned | Latest 0.9.10; skip type checking | TypeScript strict is in the stack and needs a checker; 0.9.10 fails to load (missing `@emnapi/runtime` transitive dep). 0.9.4 works. |
| 1 | 01 | Astro 5 (5.18.x), not the current Astro 7 | Upgrade to 7 | CLAUDE.md fixes Astro 5. |
