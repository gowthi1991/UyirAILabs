# Build report

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
