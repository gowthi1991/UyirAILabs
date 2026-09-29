IMPORTANT: Follow CLAUDE.md file strictly for all code generation.

## WORKFLOW
1. Read CLAUDE.md, design/brand-book.md, design/tokens.json and the parts of reference/home-design.dc.html named below.
2. Reply with a PLAN only: files to create/change, approach, questions. Do not write code yet.
3. Wait for me to reply "proceed". Never skip plan verification.
4. Implement on branch `task06/feature/seo-legal`, run `npm run build` and `npm run dev`, then report: what was done, what could NOT be verified, anything added to docs/TECH-DEBT.md.

## Task 06 — SEO, AI-search visibility, legal pages, 404

1. Per-page meta: title "Uyir AI Labs — AI-native software for real-world operations", description from the hero subline; canonical; Open Graph + Twitter card with a 1200×630 OG image (build `public/og.png` from the dark lockup on `--surface-100` using a small script or static SVG → PNG; document how).
2. JSON-LD on Home: `Organization` (name, legalName, url, logo, address, founder, sameAs LinkedIn when set), `Product` for Firro and for Native Nights (name, description, brand = Uyir AI Labs), `WebSite`.
3. `@astrojs/sitemap` with site `https://uyirailabs.com`; `public/robots.txt` allowing all incl. GPTBot, ClaudeBot, PerplexityBot, Google-Extended, pointing to the sitemap.
4. `public/llms.txt`: plain-text summary — who Uyir AI Labs is, Firro, Native Nights, services, location, contact (from content/llms.md).
5. `privacy.astro` and `terms.astro` from `content/privacy.md` and `content/terms.md` (light theme, readable 720px column, `lastUpdated` date). Show a small banner "Draft — pending legal review" only if `content/*.md` frontmatter `draft: true`.
6. `404.astro`: dark, short message, links to Home, Services, Firro, Contact.
7. Vercel Web Analytics (`@vercel/analytics` Astro integration) — no cookie banner needed; mention it in the privacy page (already in the draft).
