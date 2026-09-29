# Deploy — Vercel, domain, forms, email

## 1. GitHub
Create a private repo `uyirailabs-site`, push `main`.

## 2. Web3Forms (form emails)
1. Go to web3forms.com, enter **hello@uyirailabs.com** (create this mailbox in Zoho first, step 5) and get the access key by email.
2. Put it in `.env` as `PUBLIC_WEB3FORMS_KEY=...` for local testing, and in Vercel (step 3).
3. Check Web3Forms' current free-plan limit; if enquiries outgrow it, upgrade or switch to Supabase later.
Note: the key is public by design (it only allows sending to your inbox).

## 3. Vercel
1. vercel.com → Add New → Project → import the GitHub repo. Framework preset: **Astro** (auto). Build `npm run build`, output `dist`.
2. Settings → Environment Variables → add `PUBLIC_WEB3FORMS_KEY` (Production + Preview).
3. Settings → Analytics → enable Web Analytics.
4. Deploy. Check the `*.vercel.app` URL on your phone.

## 4. Domain uyirailabs.com
1. Vercel → Project → Settings → Domains → add `uyirailabs.com` and `www.uyirailabs.com` (set www to redirect to the apex, or the other way round; pick one).
2. Vercel shows the exact DNS records to add. Typically: an **A** record for `@` and a **CNAME** for `www`. Add exactly what Vercel shows at your domain registrar.
3. Do **not** delete MX/TXT records that belong to Zoho. Web records (A/CNAME) and mail records (MX/TXT) live side by side.
4. HTTPS is issued automatically once DNS resolves (minutes to a few hours).

## 5. Zoho Mail (email on the domain)
1. Zoho Mail Forever Free → add domain `uyirailabs.com` → verify with the TXT record Zoho gives.
2. Add Zoho's **MX** records, **SPF** TXT (`v=spf1 include:zoho.in ~all` — use exactly what Zoho shows for your data centre), **DKIM** TXT, and a **DMARC** TXT at `_dmarc`, starting with `v=DMARC1; p=none; rua=mailto:hello@uyirailabs.com`.
3. Create hello@ (alias or mailbox) and your own address.

## 6. After go-live
- Google Search Console: add `uyirailabs.com` (DNS TXT verification), submit `https://uyirailabs.com/sitemap-index.xml`.
- Google Business Profile for the Coimbatore office (optional, helps local search).
- Add the URL to LinkedIn, the ELCOT bid, the pitch deck and email signatures.
