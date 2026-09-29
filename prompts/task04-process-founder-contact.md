IMPORTANT: Follow CLAUDE.md file strictly for all code generation.

## WORKFLOW
1. Read CLAUDE.md, design/brand-book.md, design/tokens.json and the parts of reference/home-design.dc.html named below.
2. Reply with a PLAN only: files to create/change, approach, questions. Do not write code yet.
3. Wait for me to reply "proceed". Never skip plan verification.
4. Implement on branch `task04/feature/contact`, run `npm run build` and `npm run dev`, then report: what was done, what could NOT be verified, anything added to docs/TECH-DEBT.md.

## Task 04 — Process, Founder, Investor band, Contact form

Reference: "Four steps, no surprises.", founder section (`id="about"`), `id="investors"`, `id="contact"`.

1. **Process**: four steps with numbers in `--pulse-text` and the looping progress line.
2. **Founder**: `FounderMonogram` (GV with orbit) — but if `src/assets/founder.jpg` exists use it instead (Astro `<Image>`, alt "Gowtham Venkatesh Rajmohan, Founder of Uyir AI Labs"). Quote and credentials from the reference; LinkedIn link from `company.ts` (hide if empty).
3. **InvestorBand**: copy from reference; button "Request investor deck" → `/?intent=investor#contact`.
4. **ContactCTA + form** (dark section with radar rings). Keep the reference heading and subline, then add a form (new, not in the reference — style it with the tokens):
   - Intent segmented control (radio group): Start a project · Investor · Firro demo · Other. Pre-select from the URL query (`/?intent=project|investor|firro#contact`; the query comes before the hash) and also when an in-page CTA with `data-intent` is clicked (no reload).
   - Fields: Name* · Email* · Phone (optional, placeholder "+91") · Company (optional) · Message* (placeholder changes per intent) · consent checkbox* "I agree to the Privacy Policy" (link).
   - Submit via `fetch` POST to `https://api.web3forms.com/submit` with `access_key` = `import.meta.env.PUBLIC_WEB3FORMS_KEY`, `subject` = "Website enquiry — {intent}", `from_name` = "uyirailabs.com", plus a hidden honeypot field `botcheck`.
   - States: inline validation errors next to fields (`aria-describedby`), loading state on the button, success message in place of the form ("Thanks, {name}. We'll reply within one business day."), error message with a mailto fallback to hello@uyirailabs.com.
   - Works without JS: form `action` posts to Web3Forms with a `redirect` to `/thanks` — create a simple `thanks.astro`.
   - WhatsApp button uses `company.ts` number (hide if empty); floating WhatsApp button bottom-right on all pages (hidden if empty).
5. `.env.example` with `PUBLIC_WEB3FORMS_KEY=`.
