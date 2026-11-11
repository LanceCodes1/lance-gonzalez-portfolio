@AGENTS.md

# Standing rules for this project

- Commit after every small milestone and push right after each commit.
- Never build on top of something broken. Fix it or stop and tell Lance.
- Propose every git and npm command with a one-line plain explanation and wait for approval before running it.
- No Co-Authored-By or AI attribution in commit messages.
- Add 1–2 line "why" comments in code so Lance can explain every part.
- Build only what the current prompt asks for. Anything beyond it needs permission first; new ideas go in `parked.md`.
- After each milestone, append a short entry to `prompt-log.md` in this format (important decisions only):
  **Tool:** / **Prompt:** / **Why:** / **Result:**
- Never invent facts, results, or numbers about Lance or his projects. If something is missing, ask.
- All site copy lives in one content file (`content/site.ts`), not inside components.

# Project basics

- Next.js (App Router), TypeScript, Tailwind CSS, ESLint. No database, no extra libraries.
- Dependency versions in `package.json` are pinned exactly (no `^` or `~`). Stable releases only.
- Remote: `git@github.com:LanceCodes1/lance-gonzalez-portfolio.git`
