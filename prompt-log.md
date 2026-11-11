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
