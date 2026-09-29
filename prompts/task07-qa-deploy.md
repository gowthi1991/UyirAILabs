IMPORTANT: Follow CLAUDE.md file strictly for all code generation.

## WORKFLOW
1. Read CLAUDE.md, design/brand-book.md, design/tokens.json and the parts of reference/home-design.dc.html named below.
2. Reply with a PLAN only: files to create/change, approach, questions. Do not write code yet.
3. Wait for me to reply "proceed". Never skip plan verification.
4. Implement on branch `task07/chore/launch`, run `npm run build` and `npm run dev`, then report: what was done, what could NOT be verified, anything added to docs/TECH-DEBT.md.

## Task 07 — QA and deploy to Vercel

1. Run through docs/LAUNCH-CHECKLIST.md and report each item as pass / fail / not verifiable here.
2. Fix any failures that are code issues (plan first, then "proceed").
3. Prepare the Vercel deployment: `vercel.json` only if needed (static Astro needs none), confirm build command `npm run build` and output `dist/`. Do NOT deploy or change DNS yourself — list the exact steps for me from docs/DEPLOY.md.
4. Final report: Lighthouse mobile scores for `/`, `/privacy`, `/404`; bundle JS size; list of TODOs still open in `company.ts`.
