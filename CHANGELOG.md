# Pack changelog

## v3 (2026-09-30) — overnight autonomous build
- CLAUDE.md: new "Autonomous mode" section (no plan stops, self-decisions logged, one branch `build/overnight`, commit per task, hard safety limits).
- prompts/AUTONOMOUS-OVERNIGHT.md: one prompt that runs Tasks 01–07 end to end and writes a morning report.
- docs/DECISIONS.md and docs/BUILD-REPORT.md templates.
- .claude/settings.json: pre-approves the commands the build needs (npm, node, local git) so it doesn't stall on permission prompts; blocks push, deploy, curl, sudo, rm -rf and reading .env.

## v2 (2026-09-30) — fixes from Claude Code's pre-build review
1. Task 01 now starts with `git init`, `.gitignore` and a first commit of the pack.
2. Motion: the brand book allows a defined set of looping effects (the ones in the design); each pauses off-screen and is off under reduced motion. Everything else stays one-shot.
3. Intent links use `/?intent=…#contact` (query before hash); in-page CTAs use `data-intent`.
4. `NATIVE_NIGHTS_URL` added to `company.ts` in Task 01; empty values hide their links.
5. Raster images move to `src/assets/` so Astro optimises them (Native Nights screenshot, founder photo).
6. Lighthouse is measured on build + preview, not the dev server.
7. Brand book font note corrected: variable fonts, Sora headings at 500.

## v1 (2026-09-29) — first pack
