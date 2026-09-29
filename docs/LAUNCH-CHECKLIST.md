# Launch checklist

## Content from Gowtham (blockers)
- [ ] Founder photo → `src/assets/founder.jpg` (or launch with the GV monogram)
- [ ] Native Nights URL → `company.ts` `NATIVE_NIGHTS_URL`
- [ ] WhatsApp business number → `company.ts`
- [ ] LinkedIn URL (company or founder) → `company.ts`
- [ ] Confirm "Now building" statuses (Firro POS, customer app, AI prep planning, nutrition database, public meal-scheme kitchens, Native Nights)
- [ ] Confirm process commitments: "reply within one business day", "working build every week"
- [ ] Confirm the tech stack chips
- [ ] hello@uyirailabs.com mailbox live and Web3Forms key issued
- [ ] Privacy Policy and Terms reviewed by a lawyer → set `draft: false`
- [ ] GSTIN (when issued) → `company.ts`

## Build quality
- [ ] Lighthouse mobile ≥ 90 / 95 / 95 / 95 on Home (measured on `npm run build && npm run preview`)
- [ ] No horizontal scroll at 360px; tested on a real Android and iPhone
- [ ] Keyboard-only walkthrough: every link/button reachable with visible focus
- [ ] Reduced motion on: no animation, all content visible
- [ ] Every form intent submits and arrives in the inbox; error and no-JS paths work
- [ ] All links resolve (no `#` placeholders left in header/footer)
- [ ] Favicon, OG image preview (paste the URL into WhatsApp/LinkedIn to check)
- [ ] sitemap, robots.txt, llms.txt reachable
- [ ] Company facts correct (name, CIN, Udyam, address)

## Go-live
- [ ] Vercel production deploy on uyirailabs.com with HTTPS
- [ ] www ↔ apex redirect works
- [ ] Search Console verified, sitemap submitted
- [ ] Zoho SPF/DKIM/DMARC passing (send a test to Gmail, check "Show original")
