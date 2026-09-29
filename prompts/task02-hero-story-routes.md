IMPORTANT: Follow CLAUDE.md file strictly for all code generation.

## WORKFLOW
1. Read CLAUDE.md, design/brand-book.md, design/tokens.json and the parts of reference/home-design.dc.html named below.
2. Reply with a PLAN only: files to create/change, approach, questions. Do not write code yet.
3. Wait for me to reply "proceed". Never skip plan verification.
4. Implement on branch `task02/feature/hero-story`, run `npm run build` and `npm run dev`, then report: what was done, what could NOT be verified, anything added to docs/TECH-DEBT.md.

## Task 02 — Hero, scroll story and route cards

Reference: the `<section id="top">` hero (including its circuit SVG and product frame), the light sheet's first `<section>` ("Three things our AI always does") and the three route cards section.

1. **Hero** (dark): typing eyebrow "AI-native software studio · Coimbatore"; three-line `display-hero` headline "Every business runs / on a daily rhythm. / We make it intelligent." (line colours line-strong → ink-muted → ink, last line with the green sweep); subline; primary "Start a project" with `shadow-glow` + text link "See Firro"; circuit traces SVG with travelling pulses behind the content (`aria-hidden`); product frame with rotating border beam and scan line, containing `FirroAdminMock` and the caption "Illustrative data". The frame overlaps into the light sheet by 280px (rounded `radius-2xl` top corners).
2. **FirroAdminMock** component: rebuild the Kitchen Admin mock from the reference as semantic HTML/CSS (sidebar, KPI cards, prep table, AI assist panel). Decorative: wrap in `role="img"` with an aria-label describing it.
3. **StoryCycle**: two-tone heading "Three things / our AI always does."; three statements as `<button>`s (Sees / Takes / Waits) + dark Firro card whose label and status change with the active step. Desktop: the section is `position: sticky` inside a 300vh wrapper and the active step follows scroll progress (IntersectionObserver or scroll listener with rAF); clicking a statement also activates it. Mobile and reduced-motion: no sticky, all three statements shown, card shows step 1. Inactive statement colour `--ink-muted` (never opacity on text).
4. **RouteCards**: three cards (Build with us / Our products / For investors) with the exact copy from the reference.
Animations: port the CSS keyframes from the reference `<helmet><style>` (rise, typing, sweep, beam, scan, flow, blink, nodePulse, floaty, hexPulse, sk) into the relevant components; all off under reduced motion.
