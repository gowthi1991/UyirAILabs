IMPORTANT: Follow CLAUDE.md file strictly for all code generation.

## WORKFLOW
1. Read CLAUDE.md, design/brand-book.md, design/tokens.json and the parts of reference/home-design.dc.html named below.
2. Reply with a PLAN only: files to create/change, approach, questions. Do not write code yet.
3. Wait for me to reply "proceed". Never skip plan verification.
4. Implement on branch `task05/feature/responsive`, run `npm run build` and `npm run dev`, then report: what was done, what could NOT be verified, anything added to docs/TECH-DEBT.md.

## Task 05 — Responsive pass and motion polish

The reference is desktop (1440). Make every section work at 1280, 1024, 768, 390 and 360px wide.

- Content max-width 1200px with `--space-30` side margins on desktop; 24px margins below 768px; section padding 96px desktop / 64px mobile.
- Type: display-hero 96 → 56 (≤1024) → 44 (≤768); display-xl 64 → 44; display-lg 44 → 32; keep body sizes.
- Grids: 3-col → 1-col ≤768; 2-col → 1-col ≤1024; services wide cards span 1 on mobile; Native Nights band stacks (screenshot below text).
- Hero product frame: on ≤768 show only the main table area of the Firro mock (hide sidebar and AI panel) and reduce the overlap to 120px.
- Circuit traces: hide below 1024px.
- Header: hamburger below 1024px; touch targets ≥ 44px on mobile.
- Scroll reveals: `src/scripts/reveal.ts` adds `.is-visible` via IntersectionObserver (threshold 0.15) to elements with `data-reveal`; sections fade/rise once. No-JS and reduced-motion: content visible.
- Motion toggle: none in production (the "calm" mode is only for reduced-motion users).
- Looping animations: implement the off-screen pause from CLAUDE.md for every loop listed in the brand book; remove any loop not on that list.
- Check no horizontal scroll at 360px. Report Lighthouse mobile scores from `npm run build && npm run preview` (not the dev server) and anything under budget.
