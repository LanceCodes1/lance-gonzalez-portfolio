# Prompt Log

Important decisions only, one entry per milestone.

---

**Tool:** Claude Code
**Prompt:** Set up a new Next.js project (App Router, TypeScript, Tailwind, ESLint, latest stable, exact pinned versions, no extra libraries), add CLAUDE.md with standing rules, create prompt-log.md and parked.md, replace the home page with a placeholder, then commit and push to GitHub over SSH.
**Why:** Start from a clean, reproducible base with clear working rules before building any page sections.
**Result:** Project scaffolded with Next 16.4.6, React 19.3.0, Tailwind 4.3.3, TypeScript 5.9.3, ESLint 9.39.5, all pinned exactly. Placeholder home page reads its text from `content/site.ts`. Rules recorded in CLAUDE.md.

---

**Tool:** Claude Code
**Prompt:** Phase 1: build the six page sections (Hero, Services, Projects, My Path, Experience and Credentials, Contact) with plain dark styling, all copy in `content/site.ts`, empty links hidden, no visual theme yet.
**Why:** Get all real content on the page in a readable, mobile-first layout before spending time on the visual theme.
**Result:** One component per section in `components/`, each with an id the nav jumps to. Copy is typed data in `content/site.ts`; links set to `""` (Instagram, some project links) are filtered out. Inline SVG icons, no icon library. Shared `Section` and `ExternalLink` helpers keep layout and link behavior consistent. Starter images removed from `public/`.

---

**Tool:** Claude Code
**Prompt:** Phase 2: dark-only "LA sunset at night" neon theme with CSS and Tailwind only. Tokens in globals.css, restyled nav, hero with glow, gradient name, neon button, colored social icons and headshot, looping tech strip, glowing cards, timeline and buttons, new timeline copy, reduced-motion and focus support.
**Why:** Give the site a distinct visual identity while keeping text readable and the page accessible.
**Result:** Colors live once as `@theme` tokens; shared looks (`btn-neon`, `icon-btn`, `card`, `tag`, `btn-chip`, `lift`, etc.) are `@utility` classes in globals.css. Contrast checked: purple is below 4.5:1 on cards, so it is used only for glows, borders, and icons, never text. Reduced motion stops the strip (it wraps instead) and removes all lifts; every link and button gets an amber focus ring. Headshot renamed to lowercase `headshot.png` so it works on Vercel, and cropped near the top with a slight zoom so the circle frames head and shoulders.

---

**Tool:** Claude Code
**Prompt:** Phase 3: polish. New hero/path/contact copy, footer, page metadata with Open Graph; LG monogram nav + mono code tag + tab icon; headshot re-crop; neon green token, per-section background glows, cycling card glow colors, brighter tech strip, tighter spacing, linked project titles, optional proposal link; terminal card in My Path; LA skyline scene in the hero. CSS, copy, and small components only.
**Why:** Carry the sunset color down the whole page and add personality (monogram, terminal, skyline) without new libraries or JavaScript animation.
**Result:** All new copy in `content/site.ts`. LG monogram is drawn as SVG strokes and reused as `app/icon.svg` (starter favicon removed). Headshot crop was previewed as an exact 820px window before writing the CSS. Glow colors are passed as CSS variables (`components/glow.ts`) so one `card` / `section-glow` style serves every color. `gboyz-proposal.pdf` isn't in `public/` yet, so the proposal link stays `""` and hidden. Skyline is drawn from small data lists in `components/HeroScene.tsx` and committed alone so it can be reverted in one step.

---

**Tool:** Claude Code
**Prompt:** Phase 4: tweaks. Revert the hero skyline; pink-free headshot ring; commit tag as plain Permanent Marker gradient text centered in the nav; nav pills tinted per section with dark-text glowing hover; two-column My Path with a full-height terminal, new terminal text, and a blinking cursor; new contact line; blue LinkedIn button.
**Why:** Simplify the hero, tie the nav colors to the sections they jump to, and make My Path and Contact feel finished.
**Result:** Skyline removed with `git revert --no-commit` while keeping the Phase 3 prompt-log entry. Ring pink came from orange blending into purple, so the ring is orange-to-amber and the glow purple only. Commit tag shows from 1024px up because it doesn't fit beside the pills on smaller screens. Dark hover text checked: at least 4.65:1 on every pill color. Terminal stretches via the grid's default row stretch; cursor stays solid with reduced motion. `btn-blue` is a standalone class because Tailwind controls the order of custom classes.
