# Decisions log

Decisions taken during builds. Newest first.

| # | Task | Decision | Options considered | Why |
| --- | --- | --- | --- | --- |
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
