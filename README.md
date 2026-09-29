# uyirailabs.com

Website for Uyir AI Labs Private Limited. Built with Astro 5 (static), hosted on Vercel.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # astro check + static build to dist/
npm run preview  # serve dist/ locally
```

- Build report and open TODOs: `docs/BUILD-REPORT.md` · decisions: `docs/DECISIONS.md`
- Rules: `CLAUDE.md` · task prompts: `prompts/`
- Design: `design/` (tokens + brand book), `reference/home-design.dc.html` (approved Home design)
- Company facts and TODO links: `src/data/company.ts` · form key: `.env` (`PUBLIC_WEB3FORMS_KEY`, see `.env.example`)
- Deploy: `docs/DEPLOY.md` · Launch: `docs/LAUNCH-CHECKLIST.md`
- OG image: edit `scripts/og/og.html`, then `node scripts/build-og.mjs`
