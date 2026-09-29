IMPORTANT: Follow CLAUDE.md file strictly for all code generation.

## WORKFLOW
1. Read CLAUDE.md, design/brand-book.md, design/tokens.json and the parts of reference/home-design.dc.html named below.
2. Reply with a PLAN only: files to create/change, approach, questions. Do not write code yet.
3. Wait for me to reply "proceed". Never skip plan verification.
4. Implement on branch `task03/feature/products-services`, run `npm run build` and `npm run dev`, then report: what was done, what could NOT be verified, anything added to docs/TECH-DEBT.md.

## Task 03 — Firro, Native Nights, Services, Work, Insights

Reference: sections with ids `firro`, `native-nights` (inside the band after Firro), `services`, `work`, `insights`.

1. **Firro** (light): label "Our flagship product" + amber pill "Pilot · Coimbatore"; two-tone heading; copy; three outcomes with check icons; primary "Book a Firro demo" (links to `/?intent=firro#contact`, see Task 04) + "Explore Firro" link; 2×2 grid of app tiles with the four mini mockups (PosMini, AdminMini, CustomerMini, DeliveryMini) rebuilt as HTML/CSS/SVG.
2. **NativeNights** band (dark card inside the light sheet, rotating border beam): "Our second product" + "Web app live" pill, heading "Native Nights, / home banter, abroad." (second line `--nn-lavender`), blurb, four mono chips, plum pill button "Find a room" → `NATIVE_NIGHTS_URL` from `company.ts` (TODO; if empty, link to `#contact`), right side the screenshot `src/assets/native-nights-landing.png` in a browser frame via Astro `<Image>` (alt from reference).
3. **Services**: two-tone heading "AI-native builds, / for your business."; 4 cards (AI and automation and UI/UX span 2 columns) with tech chips and hover lift.
4. **Work**: two case cards — Firro collage (built from the mini mockups, slightly rotated) and Native Nights (screenshot cropped with object-fit). "Stack we ship with" marquee (duplicated list, CSS animation, paused under reduced motion, `aria-hidden` on the duplicate).
5. **Insights**: "Now building" list with status pills (Pilot / Building / Exploring) and three article cards with animated node-network headers. Article cards link to `#insights` for now (no blog in v1); add them to docs/TECH-DEBT.md as "blog pages pending".
