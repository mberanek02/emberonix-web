# CLAUDE.md

## What this is

**emberonix-web** — the Emberonix LLC site: part portfolio, part sales pitch. Two audiences, hard-separated:

1. **Web design clients** (small-business owners who want exciting, standout websites — e.g. Kent's Sport & Pawn, Revive Resume LLC)
2. **Agentic engineering clients** (companies that need production AI/automation)

Proof is split the same way: **Client Work** (sites built for paying clients) vs **My Products** (Memotive, PropertyHQ, PupDates — own apps, built solo, presented as engineering proof).

## Stack & commands

- Next.js (App Router) + React + Tailwind + TypeScript + framer-motion. Static site, deployed on Vercel.
- `npm run dev` — local dev · `npm run build` — production build (run before considering work done)

## Layout

- `src/data/projects.ts` — all project card data. Every project has `lob` (`'design' | 'agentic'` → card color: blue/amber) and `kind` (`'client' | 'product'` → which homepage section it appears in).
- `src/components/Projects.tsx` — `ClientWork` (`#client-work`) and `ProductWork` (`#products`) sections sharing one card component.
- Homepage flow (`src/app/page.tsx`): Hero → KpiStrip → Capabilities (two LOB cards, design first) → ClientWork → ProductWork → EngineeringStack → Philosophy → Process → Resume → About → CTAFooter.
- Section mono-labels are numbered (`// 01 / WHAT I DO` …) — keep sequential when reordering.
- `src/app/projects/<id>/` — consumer case-study pages; `<id>/tech/` — technical deep-dives.
- Project screenshots: `public/images/projects/`, hero screenshots are 1600×1000 (capture with headless Chrome: `--headless=new --screenshot --window-size=1600,1000 --hide-scrollbars`).

## Conventions that matter here

- No fabricated metrics or invented claims anywhere — this site sells trust. KPIs and stats must be true (see `KpiStrip.tsx`).
- Copy must speak plainly to non-technical buyers in design-LOB sections; jargon is tolerated only on the agentic side.
- Related client repos live in `~/Workspace/emberonix-llc/Clients/` (Kent-Sport-and-Pawn, Revive Resume LLC); product repos in `~/Workspace/emberonix-llc/` (Memotive) and `~/Workspace/phq-llc/`.
