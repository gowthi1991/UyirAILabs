# Decisions log

Decisions taken during builds. Newest first.

| # | Task | Decision | Options considered | Why |
| --- | --- | --- | --- | --- |
| 6 | 01 | Header/Footer live in `src/components/layout/` | `sections/` (Home-only), `ui/` (small parts) | They are site chrome used by every page, not Home sections or small parts; CLAUDE.md's tree has no slot for them. |
| 5 | 01 | Chips and pills use the `label` type style with `text-transform: none` | A new 12px mono style | "Type only the named styles"; the reference sets chips in 12px mono with case as written. |
| 4 | 01 | Gutter steps: 120px ≥1280, 64px ≥1024, 48px ≥768, 24px below | 120 → 24 in one jump | 120px margins leave too little width at 1024–1279; all values are on the spacing scale. |
| 3 | 01 | Commit generated `src/styles/tokens.css` | gitignore it | Reviewable diff when tokens change; it is regenerated on every `dev`/`build` anyway, so it cannot drift in production. |
| 2 | 01 | `@astrojs/check@0.9.4` + `typescript` as devDependencies, pinned | Latest 0.9.10; skip type checking | TypeScript strict is in the stack and needs a checker; 0.9.10 fails to load (missing `@emnapi/runtime` transitive dep). 0.9.4 works. |
| 1 | 01 | Astro 5 (5.18.x), not the current Astro 7 | Upgrade to 7 | CLAUDE.md fixes Astro 5. |
