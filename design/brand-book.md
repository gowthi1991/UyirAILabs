# Uyir AI Labs

**Build fast. Build right.** Uyir AI Labs designs, builds and runs AI-native software for businesses that live on daily operations — starting with Firro, our Kitchen OS for subscription kitchens, and extending to the products we build for clients. *Uyir* (உயிர்) means *life* in Tamil: the brand should feel alive, precise and quietly confident, never hyped.

This is version 1.1 of the system: logo, colour, type, spacing, radius and shadow tokens, plus the rules for using them. v1.1 applies the first design review: a small-size mark and favicon, a brighter mark, one green across both themes, success/info colours, and a fourth heading size. Components come next, built from the website designs.

## Brand principles

1. **Show the machine working.** Real product screens, real data shapes, live states. We prove AI by what it does, not by glowing gradients.
2. **Calm over loud.** Dark, quiet surfaces; one living accent (`pulse`). If a page looks like every other AI startup, we have gone wrong.
3. **Precise, not cold.** Circuit geometry and mono labels give the precision; Manrope's open shapes and the Tamil name give the warmth.
4. **Outcomes first.** Every headline says what changes for the customer; features come after.

## What "AI-native" means in this brand

- **Nodes, not sparkles.** The logo's six ring nodes are the brand's AI signal; in the interface they become the live dot. Use a small `pulse` dot for "live", "AI-assisted" or "processing" states instead of sparkle ✨ icons or robot imagery.
- **A machine voice beside the human one.** Mono `label` style (uppercase, tracked) marks system states and metadata — `LIVE · AI ASSIST`, `PILOT`, `v1.2`. Headlines and body stay human in Sora and Manrope.
- **Structured, quotable content.** Short factual summaries, clear headings and tables — good for readers and for AI answer engines that cite us.
- **Motion that feels alive, within limits.** Entrance motion (rise, reveal, typing) plays once. Looping ambient motion is allowed ONLY for this set: circuit data pulses and node blinks, the product-frame border beam and scan line, the headline highlight sweep, live-dot pulses, skeleton shimmer, the floating story card, the stack marquee, the process progress line, the contact radar rings and the hero button sheen. Every loop uses only transform, opacity, stroke-dashoffset or background-position; pauses when its section is off-screen; and is fully off under `prefers-reduced-motion`. No other looping effects.
- **Avoid:** blue–purple gradients, glowing orbs, glass cards, emoji-led cards, neural-network stock imagery, "revolutionary" copy.

## Logo

The logo is the founder's original design, used exactly as drawn: a hexagon of six interlocking circuit arms, each ending in a ring node, beside the "UYIR AI" wordmark and the tagline "Build Fast Build Right". The files here are a faithful vector trace of the original artwork, so it prints and scales cleanly. It is single-colour: never add a second colour, gradient or glow to it.

| Asset | Use on | Colour |
| --- | --- | --- |
| `uyir-lockup-dark.svg` | `surface-100` dark, dark photos | `ink` dark (#EDEFF3) |
| `uyir-lockup-light.svg` | `surface-100` light, documents, invoices | `ink` light (#0B0D12) |
| `uyir-mark-dark.svg` / `uyir-mark-light.svg` | avatars and spaces 32px and up | same inks |
| `uyir-mark-small-dark.svg` / `uyir-mark-small-light.svg` | anything under 32px, where the six arms blur | hexagon outline + one ring node |
| `uyir-favicon.svg` | browser tab icon | small mark on `surface-100` dark |
| `uyir-app-icon.svg` | app icons, WhatsApp and social avatars | original mark on `surface-100` dark |

- **Name:** the logo says "UYIR AI" (short form); text, legal documents and the website title say "Uyir AI Labs". Never write "Uyir Ai" or "UyirAI" in text.
- **Tagline:** "Build Fast Build Right" in the logo, as drawn; in running text write "Build fast. Build right."
- **Clear space:** at least the height of the "U" in the wordmark on every side.
- **Minimum size:** full mark 32px; below that use the small mark (down to 16px). Full lockup 140px wide; drop the tagline below 200px wide.
- **Don't:** recolour parts of it, add glows, gradients or 3D, rotate the mark, redraw or retype the wordmark, or put the dark lockup on a light ground.
- **Before print or trademark filing:** the original is a raster image, so have a designer redraw it once as clean vector master artwork (same design), then replace these files. Also run a visual search and an IP India trademark check (classes 9 and 42).
- **With Firro:** Firro keeps its own product identity. Use "Firro, by Uyir AI Labs" with the Uyir mark small and secondary.

## Colour

Dark is the primary theme; light is for long reading, documents and print. Build every screen from neutrals first, then add `pulse` for the one thing that matters.

- **Ground and surfaces:** `surface-100` page, `surface-200` cards, `surface-300` hover/code.
- **Text:** `ink` for headings and body, `ink-muted` for secondary. Both pass 4.5:1 on `surface-100` and `surface-200` in both themes.
- **Accent:** `pulse` is the same bright green in both themes, so the brand looks the same everywhere. Use it as a FILL (buttons, live dots, selected markers) with `on-pulse` content. For green TEXT and links use `pulse-text` (bright on dark, deep green on light, where bright green text would fail contrast). About 10% of a screen at most. `pulse-soft` tints badges and selected rows.
- **Signals:** `amber` for pilot/beta/in-progress and warnings; `info` for neutral notices; `danger` for errors; `success` shares the brand green, so it always comes with a check icon and words. Signals never decorate, and never rely on colour alone.
- **Focus:** `focus` ring (2px, 2px offset) on everything; `focus-on-pulse` (ink) on pulse-filled buttons.
- **Lines:** `line` for decorative dividers; `line-strong` for anything a user must see as a control edge.

Example: a primary button is `pulse` fill, `on-pulse` label in `small` weight 600, `radius-md`, `space-3` × `space-6` padding, `focus-on-pulse` ring on keyboard focus.

## Typography

| Family | Face | Role |
| --- | --- | --- |
| `display` | Sora (variable) | Headlines 28px and up, big numbers, the wordmark. Geometric, technical, confident. |
| `sans` | Manrope (variable) | Body, UI, forms. Open and warm; good at small sizes. |
| `mono` | JetBrains Mono (variable) | The machine voice: labels, status, code, data. |

Headings are Sora **Medium (500)** with tight tracking — a calm, confident look, not heavy. Scale: `display-hero` 96 (Home hero only) → `display-xl` 64 → `display-lg` 44 → `heading-lg` 36 → `heading` 28 (Sora), then `title` 20 → `body-lg` 18 → `body` 16 → `button` 15 → `small` 14 (Manrope), plus mono `label` 12 and `code` 14. One `display-xl` per page. Headings in sentence case. Keep lines 60–75 characters for `body`. Set `label` in `ink`, never `ink-muted`, at its small size.

On the website, the three fonts are variable files, so one file per family covers every weight (Sora headings at 500; Manrope 400–700; JetBrains Mono 500). Preload Sora and Manrope; load JetBrains Mono normally. Tamil type is not part of v1.

## Layout, spacing and shape

- 4px base; use the spacing tokens only. Sections breathe: `space-24` desktop, `space-16` mobile.
- 12-column grid, 1200px content width inside `space-30` (120px) page margins on desktop, `space-6` gutters.
- **Two-tone headings:** a section heading may split into two lines, the first in `pulse-text`, the second in `ink` (`display-lg`).
- **Dark → light → dark:** pages open dark, content sits on a light sheet with `radius-2xl` top corners, and the closing CTA and footer return to dark. Bento grids use `space-8` gaps and `radius-lg` tiles.
- Radius: `radius-sm` chips, `radius-md` controls and small tiles, `radius-lg` cards and screenshots, `radius-xl` large cards and photo frames, `radius-2xl` page sheets, `radius-pill` status only.
- Buttons: one primary style everywhere (`pulse` fill, `on-pulse` label in `button`, `radius-md`, 48px tall); the hero's primary may add `shadow-glow`. Secondary: `line-strong` outline, same size.
- Depth: dark theme uses hairline rings (`shadow-card`) rather than shadows; light uses soft shadows. `shadow-raised` only on hover, menus and modals.

## Iconography and imagery

- **Icons:** outline, 1.75px stroke, rounded caps and joins, 24px grid, `graphite` by default and `ink` when active (Lucide matches this and is the default set). Filled `pulse` dot = live/AI state.
- **Product imagery:** real Firro and client screens in simple device frames on `surface-200`, `radius-lg`, `shadow-card`. Never fake dashboards.
- **Photography:** real kitchens, teams and Coimbatore — natural light, candid, slightly cool grade to sit on the dark ground. No stock handshakes or robots.
- **Pattern:** a dot grid at the `space-4` pitch in `line` may sit behind hero sections; a few dots may light up in `pulse` to echo the nodes.

## Logo decision

**The founder's original logo is approved and used as drawn** (vector trace in Logos). The earlier redraw with green nodes and the உ explorations were not taken forward; the explorations stay in their group as a record only.

## Voice and content

- Plain, specific, short. Say what the software does and for whom.
- **Do:** "Firro plans tomorrow's prep from today's subscriptions." · "We shipped Firro's POS, admin, customer and delivery apps in-house."
- **Don't:** "Revolutionising kitchens with cutting-edge AI." · "Seamless, synergistic solutions."
- Numbers only when real and dated. Name the city and the customer type — "subscription kitchens in Coimbatore" beats "F&B businesses".
- CTAs are verbs about the next step: "Start a project", "Book a Firro demo", "Request investor deck".
