AUTONOMOUS MODE — IMPORTANT: Follow CLAUDE.md file strictly for all code generation, including its "Autonomous mode" section.

Build the full uyirailabs.com website tonight, end to end, without waiting for me. Take your own recommendations whenever a choice comes up, and log them.

## Run order
1. If this folder is not a git repo: `git init`, add `.gitignore` (node_modules, dist, .env, .astro, .vercel), commit the pack on `main` ("chore: add handoff pack"). Then create branch `build/overnight`.
2. Execute, in order, every task file: prompts/task01-scaffold.md → task02 → task03 → task04 → task05 → task06 → task07. Ignore their "WORKFLOW" sections (plan/proceed) for this run; follow everything else in them.
3. For each task:
   a. Append the plan to docs/BUILD-REPORT.md under "## Task NN — plan".
   b. Implement it.
   c. Run `npm run build`; fix until it passes (max 3 attempts).
   d. Append "## Task NN — result" to docs/BUILD-REPORT.md: what was built, what could not be verified, open TODOs.
   e. Commit: `feat(taskNN): <summary>`.
4. Task 04 without a Web3Forms key: build the form fully, read the key from `PUBLIC_WEB3FORMS_KEY`, and show a clear "Form not configured" console warning when it is empty. Do not block on it.
5. Task 07: run `npm run build && npm run preview` and Lighthouse if available (`npx lighthouse` needs Chrome; if it cannot run, say so). Do not deploy.

## Morning report
Finish by writing the top of docs/BUILD-REPORT.md as a summary for me:
- Status of each task (done / partial / failed) in one table
- How to view it: the exact commands (`npm install`, `npm run dev`) and URL
- Decisions you made (link to docs/DECISIONS.md), TODOs needing my input, known issues
- The first three things I should check in the browser

If you run out of time or usage mid-run, make sure the last completed task is committed and the report says exactly where to resume.
