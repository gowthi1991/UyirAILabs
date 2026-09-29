# Build report

## Morning summary (overnight run, 30 Sep 2026)

All seven tasks are built and committed on branch `build/overnight` (not merged into `main`). `npm run build` passes with 0 type errors.

| Task | Status | Commit |
| --- | --- | --- |
| 01 Scaffold, tokens, header, footer | Done | feat(task01) |
| 02 Hero, scroll story, route cards | Done | feat(task02) |
| 03 Firro, Native Nights, Services, Work, Insights | Done | feat(task03) |
| 04 Process, founder, investor band, contact form | Done — live form delivery not verified (no Web3Forms key yet) | feat(task04) |
| 05 Responsive + motion | Done — real devices not tested | feat(task05) |
| 06 SEO, llms.txt, legal pages, 404 | Done | feat(task06) |
| 07 QA + deploy prep | Done — not deployed (by design) | feat(task07) |

**Lighthouse mobile (local production build):** Home 99 / 100 / 96 / 100, LCP ≈2.2 s, CLS 0. JS shipped: 4.3 KB gzipped (budget 30 KB). Best Practices is 96 only because Vercel Analytics 404s off Vercel.

### How to view it

```bash
npm install
npm run dev
```

Open http://localhost:4321. For the production build: `npm run build && npm run preview` → http://localhost:4321 (or the port it prints).

### Decisions, TODOs, known issues

- **Decisions:** 25 logged in [DECISIONS.md](DECISIONS.md). The ones most worth a look: #9 (loops not on the brand-book list — steam, hex pulse, founder orbit — are drawn still), #13 (the scroll story pins only on screens ≥1025×820), #16/#17 (no Services/Insights index pages, so "All services"/"All insights" are left out and service cards open the contact form), #20 (the form replaces the closing "Start a project" button).
- **Needs your input:** Web3Forms key → `.env` + Vercel (`PUBLIC_WEB3FORMS_KEY`); in `src/data/company.ts`: `NATIVE_NIGHTS_URL`, `whatsappNumber`, `linkedinUrl`, `gstin`; founder photo → `src/assets/founder.jpg`; confirm the "Now building" statuses, process promises and stack chips; lawyer review of `content/privacy.md` and `content/terms.md` → `draft: false`.
- **Known issues / not verified:** no live form submission or no-JS POST test; no real Android/iPhone test; social OG preview and Vercel Analytics need the live URL; blog pages pending ([TECH-DEBT.md](TECH-DEBT.md)); `public/llms.txt` must be kept in step with `content/llms.md` by hand.

### First three things to check in the browser

1. **Scroll the "Three things our AI always does" section on a desktop screen** (≥1025 px wide, ≥820 px tall): it should pin while the three statements take turns and the dark Firro card changes label.
2. **Click "Book a Firro demo" and then "Request investor deck"**: the page should scroll to the form with the matching intent selected and the message placeholder changed, without reloading. Submit it empty to see the inline errors.
3. **Resize to a phone width (~390 px)**: the hamburger menu, the stacked sections, the hero mock showing only the prep table, and no sideways scrolling.

### Where to resume

Nothing is left mid-task. Next steps are yours: review `build/overnight`, merge it, then follow the deployment steps at the end of Task 07 below.

## Task log

(Written by Claude Code during the build.)

---

## Task 01 — plan

- `git init`, `.gitignore`, commit the pack on `main`, branch `build/overnight`.
- Astro 5 static + TypeScript strict (`astro/tsconfigs/strict`), `@astrojs/sitemap`, `@vercel/analytics`; `npm run build` = `astro check && astro build`.
- `scripts/build-tokens.mjs` → `src/styles/tokens.css`: `@font-face` ×3, static tokens (space, radius, families, `--fs-*`/`--lh-*` per type style, `--nn-*`), dark theme on `:root, .theme-dark`, light on `.theme-light` (every colour + shadow re-declared per theme so aliases resolve inside nested themes), `.t-*` utility per type style. Wired to `predev`/`prebuild`.
- `src/styles/global.css`: reset, body on surface-100/ink, `.container` (1200px + gutter), focus ring, dot grid, skip link, reduced-motion block, gutter steps per breakpoint.
- `src/data/company.ts` (facts + TODO fields incl. `NATIVE_NIGHTS_URL`, derived `whatsappUrl`, `mailto`).
- UI parts: `Icon`, `Button` (primary/secondary/text), `Label`, `LiveDot`, `Pill`, `Chip`, `SectionHeading`.
- `layout/Header.astro` (+ `scripts/nav.ts` hamburger < 1024px, Escape closes, no-JS fallback shows links inline), `layout/Footer.astro`, `BaseLayout.astro` (meta, canonical, OG/Twitter, favicon, font preloads, skip link), `index.astro`.

## Task 01 — result

**Built:** everything in the plan. `npm run build` passes (astro check: 0 errors, 0 warnings). Dev server renders header and footer matching the reference at 1024px+.

**Could not verify:** real-device rendering; screen reader pass on the mobile menu.

**TODOs:** `company.ts` → `linkedinUrl`, `whatsappNumber`, `NATIVE_NIGHTS_URL`, `gstin` (links/lines hidden while empty).

## Task 02 — plan

- `sections/Hero.astro`: dot-grid dark hero, typing eyebrow, three-line `display-hero` headline (line-strong → ink-muted → ink) with the green sweep on line 3, subline, primary "Start a project" (`shadow-glow` + sheen loop) and "See Firro" text link; staggered `rise` entrance.
- `mockups/CircuitTraces.astro`: the reference's 10 traces, travelling packets (`stroke-dashoffset`) and end-node blinks (opacity overlay, not stroke/fill animation), `aria-hidden`.
- `sections/ProductFrame.astro`: `<figure>` with rotating border beam (rotating conic layer behind an inset panel — transform only), scan line, `FirroAdminMock`, caption "Illustrative data"; overlaps the light sheet by `--hero-overlap` (280px).
- `mockups/FirroAdminMock.astro` + `FirroAssist.astro`: sidebar, KPI cards, prep table, AI assist column; `role="img"` + descriptive `aria-label`.
- `sections/StoryCycle.astro` + `scripts/story-cycle.ts`: two-tone heading, three statement `<button aria-pressed>`s, `KitchenIllustration` + floating dark `StoryCard` (label/state change with the step, `aria-live="polite"`). Sticky in a 300vh wrapper on wide + tall screens; click scrolls to that step.
- `sections/RouteCards.astro`: three cards, copy from the reference.
- `index.astro`: hero + light sheet (`theme-light`, radius-2xl top corners).

## Task 02 — result

**Built:** all of the above; build passes. Checked in the browser at 1440×900: hero matches the reference, the frame overlaps the sheet, the story pins and the active step/card label follow scroll (step 2 → "First pass ready / awaiting review").

**Could not verify:** real devices; screen reader announcement of the story card change.

**Notes:** typing effect reveals characters by opacity (width animation is not an allowed property); the full eyebrow text is in a visually-hidden span for screen readers.

## Task 03 — plan

- `sections/Firro.astro`: label + amber "Pilot · Coimbatore" pill, two-tone heading, lede, three outcomes with check icons, "Book a Firro demo" (`/?intent=firro#contact`, `data-intent`) + "Explore Firro", 2×2 app tiles with `PosMini`, `AdminMini`, `CustomerMini`, `DeliveryMini` (shared dark `MiniFrame`, `aria-hidden`).
- `sections/NativeNights.astro`: dark band (`theme-dark`) inside the light sheet with the shared `.beam` utility, lavender second line, four mono chips, plum pill "Find a room" → `NATIVE_NIGHTS_URL` (falls back to `/?intent=other#contact` while empty), screenshot via Astro `<Image>` (AVIF/WebP widths, lazy) in a browser frame.
- `sections/Services.astro`: two-tone heading, 4 cards (AI + UI/UX span 2), graphite icons, tech chips, hover lift.
- `sections/Work.astro` + `mockups/FirroCollage.astro` + `sections/StackMarquee.astro`: two case cards, rotated mini-screen collage, cropped screenshot, marquee with an `aria-hidden` duplicate.
- `sections/Insights.astro` + `mockups/NodeNetwork.astro`: "Now building" list with Pilot/Building/Exploring pills; three article cards with node-network headers (travelling pulse), linking to `/#insights`.
- Move the border beam to a global `.beam` utility (`--beam-radius`, `--beam-bg`); add the `.is-offscreen` pause rule.

## Task 03 — result

**Built:** all of the above; build passes (0 errors). Full-page screenshot at 1440×900 checked against the reference.

**Could not verify:** real devices; the Native Nights link target (URL not supplied yet).

**TODOs / tech debt:** blog pages pending (article cards link to `/#insights`); no Services or Insights index pages, so the reference's "All services" / "All insights" buttons are left out (see DECISIONS #16).

## Task 04 — plan

- `sections/Process.astro`: four steps, numbers in `pulse-text`, looping progress line (scaleX).
- `sections/Founder.astro` + `mockups/FounderMonogram.astro`: uses `src/assets/founder.jpg` via `import.meta.glob` when present, else the GV monogram; quote + credentials from the reference; LinkedIn button only when `company.linkedinUrl` is set.
- `sections/InvestorBand.astro`: copy from the reference; "Request investor deck" → `/?intent=investor#contact` (`data-intent`).
- `sections/ContactCTA.astro` (radar rings, heading, subline, WhatsApp button only when a number is set) + `ContactForm.astro`, `IntentPicker.astro` (native radio group styled as a segmented control), `ui/FormField.astro`.
- `scripts/contact-form.ts`: preselect intent from `?intent=`; in-page `a[data-intent]` clicks set the intent + scroll without reload; per-intent message placeholder and subject "Website enquiry — {intent}"; inline errors (`aria-invalid` + `aria-describedby`), focus first invalid field; loading state; success replaces the form ("Thanks, {name}. We'll reply within one business day."); error with mailto fallback; "Form not configured" console warning when `PUBLIC_WEB3FORMS_KEY` is empty.
- No-JS path: the form is a normal POST to Web3Forms with `redirect` → `/thanks` (`pages/thanks.astro`, noindex, excluded from the sitemap). Honeypot `botcheck`.
- `ui/WhatsAppFab.astro` in the layout (renders nothing while the number is empty). `.env.example`.

## Task 04 — result

**Built:** all of the above; build passes. In the browser: `/?intent=firro#contact` preselects "Firro demo" with the Firro placeholder and subject; empty submit shows all four errors and focuses Name; clicking "Request investor deck" switches to Investor and updates the URL without reloading; a valid submit with no key shows the error box and logs the "Form not configured" warning. Fixed: `[hidden]` now always hides (the success panel was showing).

**Could not verify:** a live Web3Forms submission (no key yet) for any intent; the no-JS POST + redirect to `/thanks`; screen reader announcements of the error/success states.

**TODOs:** `PUBLIC_WEB3FORMS_KEY` in `.env` and Vercel; founder photo → `src/assets/founder.jpg`; LinkedIn URL and WhatsApp number in `company.ts`.

## Task 05 — plan

- Type steps in `global.css` via the generated `--fs-*`/`--lh-*` variables: display-hero 96 → 56 (≤1024) → 44 (≤768); display-xl 64 → 44 and display-lg 44 → 32 (≤768).
- Gutters 120/64/48/24 (Task 01), section padding 96 → 64 below 768; grids collapse per the task in each section; Native Nights stacks with the screenshot below; hero mock shows only the table area ≤767 (sidebar, AI column and the Batches column hidden) with a 120px overlap; circuit traces hidden < 1024; hamburger < 1024 with 44px targets.
- `scripts/reveal.ts`: IntersectionObserver (threshold 0.15) adds `.is-visible` to `[data-reveal]` once (small stagger); the same script toggles `.is-offscreen` on `[data-loop]` sections so every loop pauses off-screen. No-JS and reduced motion: content visible.
- Audit loops against the brand-book list (non-listed loops were already drawn still in Tasks 02–04).
- Check for horizontal scroll at 360–1280 and run Lighthouse mobile on build + preview.

## Task 05 — result

**Built:** all of the above. Fixed while testing: the 1440px circuit SVG caused horizontal scroll at 1024–1280 (hero now `overflow-x: clip`); the menu toggle showed both icons and the frame's entrance didn't run (parent-scoped styles don't reach child components — switched to `:global`); reveals inside paused loop sections could stay hidden (entrances are now exempt from the pause); tighter mobile hero padding; smaller story-card overlap on mobile. CSS is now inlined (`inlineStylesheets: 'always'`), which removed the render-blocking request.

**Measured (production build, `astro preview`, Lighthouse 12 mobile, local machine):** Performance 99 · Accessibility 100 · Best Practices 100 · SEO 100; LCP 2.0–2.2 s, CLS 0, TBT 0 ms. JS shipped on Home: 2.6 KB gzipped (inline module scripts). No horizontal scroll at 360, 390, 768, 1024, 1280, 1440.

**Could not verify:** real Android/iPhone devices and real 4G; Lighthouse on the deployed Vercel URL.

## Task 06 — plan

- Meta: default title "Uyir AI Labs — AI-native software for real-world operations", description = hero subline, canonical, Open Graph + Twitter `summary_large_image` (already in `BaseLayout`).
- OG image: `scripts/og/og.html` (dark lockup on `surface-100`, dot grid, headline) rendered to `public/og.png` (1200×630) by `scripts/build-og.mjs` with local headless Chrome. Run manually: `node scripts/build-og.mjs`, then commit the PNG.
- `layout/HomeJsonLd.astro`: `@graph` with `Organization` (name, legalName, url, logo, email, PostalAddress, founder; `sameAs` only when LinkedIn is set), `WebSite`, `Product` ×2 (Firro, Native Nights; `brand` → the Organization).
- `@astrojs/sitemap` (site `https://uyirailabs.com`, `/thanks` excluded); `public/robots.txt` allowing all incl. GPTBot, ClaudeBot, PerplexityBot, Google-Extended + sitemap; `public/llms.txt` from `content/llms.md` (+ links to the legal pages).
- `sections/LegalPage.astro` + `pages/privacy.astro`, `pages/terms.astro`: Markdown imported from `content/*.md`, light 720px column, "Last updated", draft banner when `draft: true`, company facts block from `company.ts`.
- `pages/404.astro`: dark, short message, links to Home, Services, Firro, Contact.
- Vercel Web Analytics via `@vercel/analytics/astro` in the layout.

## Task 06 — result

**Built:** all of the above; build passes. Checked: sitemap lists `/`, `/privacy/`, `/terms/`; canonicals match the sitemap (trailing slash); JSON-LD present on Home; Privacy renders with the draft banner; 404 renders.

**Could not verify:** Rich Results / schema validator on the live URL; OG preview in WhatsApp/LinkedIn (needs the public URL); Vercel Analytics collecting (only works on Vercel — locally its script request 404s).

**TODOs:** lawyer review of Privacy and Terms → set `draft: false` in `content/*.md`; LinkedIn URL (adds `sameAs`).

## Task 07 — plan

- Walk docs/LAUNCH-CHECKLIST.md and mark each item pass / fail / not verifiable here.
- Code audit against CLAUDE.md: hardcoded colours, off-scale spacing/radius, file-size limits, script-block size, dead links.
- Lighthouse mobile on `npm run build && npm run preview` for `/`, `/privacy/`, `/404`; measure shipped JS.
- Deployment prep (no deploy): confirm Vercel settings; list the exact steps.

## Task 07 — result

**Fixed during QA:** `Hero.astro`, `Header.astro` and `Footer.astro` were just over the 200-line / 150-CSS-line limits → typing effect moved to `ui/TypingText.astro`, nav data to `src/data/navigation.ts`. Audit afterwards: no hex/rgb/named colours outside `tokens.css`; no off-scale spacing or radius in layout (only 1–2px borders, the visually-hidden utility and drawn mockup geometry — DECISIONS #14); all files within limits; 158 links across 5 pages, 0 broken, 0 `#` placeholders.

**Lighthouse mobile (Lighthouse 12, local `astro preview`):**

| Page | Perf | A11y | Best practices | SEO | LCP | CLS |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | 99 | 100 | 96 | 100 | 2.2 s | 0 |
| `/privacy/` | 99 | 100 | 96 | 100 | 2.0 s | 0 |
| `/404` (as `/404.html`) | 99 | 100 | 96 | 69 | 2.1 s | 0 |

Best Practices is 96 only because the Vercel Analytics script (`/_vercel/insights/script.js`) 404s outside Vercel; it should be 100 once deployed. 404 SEO is 69 by design (`noindex`). Lighthouse refuses to score a real 404 response, so `/404.html` was measured.

**JS shipped:** 4.3 KB gzipped on Home (all inline module scripts, including Vercel Analytics); budget 30 KB. CSS is inlined (≈10 KB gz). Native Nights screenshot served as WebP at 560/1120 (and 600/1200) widths, lazy.

**Launch checklist**

| Item | Status |
| --- | --- |
| Founder photo | Not supplied — GV monogram shown (drop `src/assets/founder.jpg` to switch) |
| Native Nights URL | **TODO** — "Find a room" falls back to the contact form |
| WhatsApp number | **TODO** — WhatsApp buttons hidden |
| LinkedIn URL | **TODO** — LinkedIn links hidden |
| "Now building" statuses | Needs your confirmation (copied from the design) |
| Process commitments ("one business day", "working build every week") | Needs your confirmation |
| Tech stack chips | Needs your confirmation |
| hello@ mailbox + Web3Forms key | **TODO** — form shows an error + mailto until the key is set |
| Privacy/Terms lawyer review → `draft: false` | **TODO** — draft banner showing |
| GSTIN | Pending — renders nothing while `null` |
| Lighthouse ≥ 90/95/95/95 on Home | Pass (99/100/96/100 locally) |
| No horizontal scroll at 360px | Pass (checked 360, 390, 768, 1024, 1280, 1440) · real Android/iPhone: not verifiable here |
| Keyboard-only walkthrough | Pass — 60 tab stops, every one with a visible focus ring, logical order |
| Reduced motion | Pass — no animation, all content visible, story not pinned |
| Every form intent arrives in the inbox; error and no-JS paths | Partly — validation, intent preselect, in-page intent switching and the not-configured error verified; live delivery and no-JS POST **not verifiable** without the key |
| All links resolve, no `#` placeholders | Pass |
| Favicon, OG image | Favicon + `og.png` in place · social preview not verifiable until live |
| sitemap, robots.txt, llms.txt | Pass (in `dist/`) |
| Company facts | Pass — name, CIN, Udyam, address from `company.ts` |
| Go-live items (Vercel, domain, www redirect, Search Console, Zoho SPF/DKIM/DMARC) | Not done — your steps below |

**Deployment:** static Astro needs no `vercel.json`. Vercel settings: Framework **Astro**, Build `npm run build`, Output `dist`, Node 20+. Steps for you (docs/DEPLOY.md): (1) import `gowthi1991/UyirAILabs` in Vercel; (2) add `PUBLIC_WEB3FORMS_KEY` (Production + Preview) and enable Web Analytics; (3) deploy and check the `*.vercel.app` URL on your phone; (4) add `uyirailabs.com` + `www` in Vercel → Domains and create exactly the A/CNAME records Vercel shows, keeping Zoho's MX/TXT records; (5) Search Console → submit `https://uyirailabs.com/sitemap-index.xml`.
