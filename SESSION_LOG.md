# SESSION_LOG.md

## Current State

**What's Working:** Production build green (14 static pages incl. /playground). Homepage restructured into dual-audience sales flow. Revive Resume added as second client project. New Memotive monogram icon in place. Playground section live with Lego Charlotte scroll-world demo (77MB static assets in public/).

**What's Broken / Incomplete:** Footer GitHub/LinkedIn bottom-strip links still point to bare domains (`github.com/`, `linkedin.com/`). Playground commit not yet pushed/deployed.

**Pending Queue:** see TASKS.md

---

### 2026-07-12 — Playground section + Lego Charlotte demo

**Focus:** Host the Lego Charlotte scroll-world demo (built today in Demo-Projects with the scroll-world skill) on emberonix.com behind a new "Playground" nav link.

**Changes made:**
- `public/playground/lego-charlotte/` — the full static demo (index.html, scrub-engine.js, 77MB of AI-generated video/stills). Asset paths absolutized to `/playground/lego-charlotte/...`; demo's brand wordmark links back to /playground.
- `src/app/playground/page.tsx` — new branded landing page ("// PLAYGROUND", "Where the sparks fly off the anvil."), card grid driven by a local `playgroundProjects` array (scales for future fun builds).
- `public/images/playground/lego-charlotte.jpg` — 1600×1000 card art from the demo's anchor still.
- `src/components/Navbar.tsx` — added Playground link (between Products and Resume).
- `next.config.mjs` — rewrites so `/playground/lego-charlotte` (± trailing slash) serves the static index.html.

**Key decisions:** Name "Playground" chosen by Michael (over Sparks/Lab). Landing-page-plus-card structure over a bare deep link, so future experiments slot in as new cards. Demo hosted as plain static files inside public/ (same domain, no extra infra) — accepted the 77MB repo weight.

**What's next:** push + Vercel deploy (awaiting Michael's go), verify demo scrubs on production, consider mobile encodes for the demo.

### 2026-06-11 — Dual-audience restructure, Revive Resume, new Memotive icon

**Focus:** Turn the site from a hodgepodge portfolio into a sales pitch with hard separation between (a) client work vs own products and (b) web-design services vs agentic engineering.

**Changes made:**
- `public/images/projects/memotive-icon.png` — replaced orb icon with new gold "M" monogram (1254×1254, from pasted image).
- `public/images/projects/revive-hero.png` — new 1600×1000 screenshot of live reviveresumellc.com (headless Chrome).
- `src/data/projects.ts` — added `kind: 'client' | 'product'` to the model; added Revive Resume LLC entry; reordered (clients first).
- `src/components/Projects.tsx` — split single mixed grid into `ClientWork` (`#client-work`, blue) and `ProductWork` (`#products`, amber) via shared `WorkSection`.
- `src/app/page.tsx` — flow now Capabilities → ClientWork → ProductWork → EngineeringStack.
- `src/components/Capabilities.tsx` — design LOB now first ("FOR BUSINESS OWNERS"), CTAs point to #client-work / #products.
- `src/components/Hero.tsx` — headline "SITES THAT SELL. / AGENTS THAT SHIP."; plain-English sub copy; CTAs "I Need a Website" / "I Need AI Engineering".
- `src/components/KpiStrip.tsx` — replaced fabricated metrics (0.04ms latency etc.) with true proof points (20+ yrs, 3 live products, 2 client sites, zero hand-offs).
- `src/components/Navbar.tsx` — links: Practices / Client Work / Products / Resume / Contact; CTA "Deploy Now" → "Start a Project".
- `src/components/CTAFooter.tsx` — footer pitch now addresses both audiences.
- `src/app/layout.tsx` — title/OG updated to "Sites That Sell. Agents That Ship." with buyer-facing description.
- Renumbered section labels (01–07); all `#projects` anchors repointed to `#products` (Philosophy pillar, ProjectLayout, 3 case-study pages).

**Key decisions:**
- Design LOB leads everywhere (hero color split, Capabilities order) — majority of near-term clients are web-design buyers.
- `kind` (client/product) is a separate axis from `lob` (design/agentic): sections separate by kind, card colors stay by lob.
- No fabricated metrics — fake KPIs undermine a sales site; replaced with verifiable claims.

**What's next:** Review the rebrand branch as a whole and merge to main; consider real GitHub/LinkedIn URLs in footer bottom strip; possibly add testimonials from Kent's/Lauren for the client-work section.

### 2026-06-11 (later) — Agentic proof section, icon cache-bust, hero meta cleanup

**Focus:** Fix the Module-2 mismatch: the agentic pitch pointed at consumer apps that don't read as agentic-engineering proof.

**Changes made:**
- `src/components/AgenticPractice.tsx` — NEW section (`#agentic-work`, // 03): anonymized Latham Group consulting engagement card (manufacturing AI dashboards, channel automation, demo platforms, AI training — "client names withheld, references on request"), two "production system" cards surfacing the AI inside the products (Memotive semantic memory engine, PropertyHQ Rex tool-calling assistant, both linking to /tech build notes), and a meta-proof line (whole portfolio shipped solo via agentic workflows).
- `src/app/page.tsx` — flow now ClientWork → AgenticPractice → ProductWork.
- `src/components/Projects.tsx` — Products renumbered to // 04, intro reframed as pure shipping/craft proof, `subtle` bg removed (AgenticPractice carries it for alternation).
- Renumbered EngineeringStack 05, Process 06, Resume 07, About 08.
- `Capabilities.tsx` agentic CTA → "SEE IT IN PRACTICE" `#agentic-work`; Hero ghost CTA → `#agentic-work`; Navbar gained "Agentic" link.
- `public/images/projects/memotive-monogram.png` — renamed from memotive-icon.png to cache-bust (user's browser held the old orb under the original URL); `pulse` flag removed from Memotive card.
- `Hero.tsx` — removed `v.4.0.2-ALPHA` pill; EST. 2004 → EST. 2026.

**Key decisions:**
- Latham Group work published anonymized (user's choice): naming Latham or their end clients (Espey, McGill Hose, Cardinal, Apex, FuzeHub) requires Kim/Rick's OK; end-client names are Latham's relationships, not ours.
- Products framed as craft/shipping proof only; agentic proof lives in the dedicated section.

**What's next:** Ask Kim & Rick whether Latham Group can be named (upgrade the engagement card); then merge rebrand branch.

### 2026-06-11 — V2: "The Ember Forge" ground-up experience redesign

**Focus:** Full visual-experience rebuild of the homepage (this folder is the V2 fork of emberonix-web; V1 remains the fallback).

**Changes made:**
- Added `gsap` + `lenis` deps (three/R3F already present).
- New `src/components/v2/`: SmoothScroll (Lenis+ScrollTrigger sync), Cursor (ember dot + lagging ring, VIEW lens), Preloader (000→100 forge-door reveal), EmberField (custom-shader THREE.Points — 5.5k mouse-reactive particles, blue→amber across x, scatter on scroll), NavV2 (full-screen mobile menu), HeroV2 (per-char monument headline, Bebas + Instrument Serif italic counterpoints), Manifesto (word-by-word scrub burn-in), MarqueeBand (velocity-reactive skew), PracticesSplit (hover-expanding choose-your-lane panels), WorkGallery (pinned horizontal scrub gallery + "Your site belongs here" pitch card), AgenticSystems (count-up stats + system cards), ProductsV2 (3D-tilt cards), FooterV2 (outlined LET'S BUILD monument, magnetic CTAs).
- `layout.tsx`: added Instrument Serif (--font-serif); SmoothScroll + Cursor mounted globally. `page.tsx`: new composition. globals.css: appended V2 experience layer (cursor, preloader, hero, marquee, monument styles).
- EmberField wraps WebGLRenderer creation in try/catch — site degrades to static hero instead of crashing when WebGL is unavailable.
- Nav CTA mobile-hide fixed via wrapper div (`.btn-primary` display overrides Tailwind `hidden` due to cascade order — beware this pattern).

**Key decisions:**
- Kept obsidian/amber/blue brand + Bebas display (continuity with inner pages); added Instrument Serif italic as the "human" counterpoint.
- Homepage only — /projects/* pages untouched and still build on V1 components.
- Reduced-motion: preloader/cursor/scrub all gated on prefers-reduced-motion; WebGL skipped entirely.

**What's next:** Review in a foregrounded browser (rAF pauses in background tabs — WebGL field looks "off" in automated screenshots but runs live). Tune particle density/copy to taste; decide V1 vs V2.

### 2026-06-11 (iteration 2) — De-V1: Syne type, services index, calmer field

**Focus:** User feedback round: site still read too much like V1; hero field too busy; gallery screenshots over-zoomed; nothing concretely listing sellable services.

**Changes made:**
- Type system: Bebas Neue → **Syne** (600/700/800), all v2 display text now mixed-case with tighter tracking; Instrument Serif italics kept as accent words. Hero/monument clamps resized for Syne metrics.
- Palette: blue removed from v2 sections — obsidian + bone + ember only (particle field mixes bone→ember instead of blue→ember).
- EmberField calmed: 2400 particles (was 5500), smaller/slower/dimmer (opacity cap 0.55), gentler mouse repulsion.
- PracticesSplit rewritten as a **services index**: two lanes (Design & Build / Agentic AI) with 10 concrete service rows — custom websites with motion, e-commerce, iOS, brand systems; custom AI agents, RAG knowledge systems, workflow automation, LLM integration & routing, AI dashboards, team training. Each row: pitch line + tags + hover ignite.
- WorkGallery: removed inner parallax/zoom (images now true-fit object-cover), cards narrowed to 48–52vw, stronger bottom gradient for title legibility, de-blued.
- AgenticSystems intro now names RAG pipelines explicitly; marquee alternates Syne bold / serif-italic outline.

**Key decisions:** Mixed-case Syne + no blue is the V2 identity divergence; V1 keeps Bebas/uppercase/blue-amber. Mono labels stay uppercase everywhere (system voice).

**What's next:** User review of iteration 2; possible palette exploration beyond ember if still too close to V1.

### 2026-06-11 (iteration 3) — Revert display font, Martian Mono, molten hero, editorial client cards

**Focus:** User feedback: Syne headers looked bad — revert to Bebas (previous look was right); Syne kept ONLY for the EMBERONIX wordmark (.font-wordmark). The "standard AI font" complaint was the mono labels — JetBrains Mono → **Martian Mono**. Hero particles axed; client-work horizontal pin axed.

**Changes made:**
- layout.tsx: Bebas back as --font-display; Syne demoted to --font-syne (wordmark only); Martian Mono as --font-mono.
- All v2 display text back to uppercase Bebas; hero/monument size clamps restored.
- EmberField rewritten as a **molten backdrop**: full-screen fbm domain-warped smoke shader (slow obsidian/charcoal smolder, ember pockets, cursor lantern glow, heat at lower edge). No particles. Same WebGL-unavailable fallback.
- WorkGallery rewritten: vertical **alternating editorial cards** — true-fit 16/10 screenshot + overlapping glass info panel (tags, stats, live link), subtle scroll parallax on shots, full-width "Your site belongs here" pitch strip. No pinning.

**Key decisions:** Bebas+serif-italic is the V2 voice; Syne is logotype-only; Martian Mono is the system voice. Motion hierarchy: hero = slow atmosphere, content = restrained reveals.

**What's next:** User review; possible niceties — hero CTA scroll-to easing, operator portrait treatment, deploy preview.

### 2026-06-11 (iteration 4) — Deck cards, livelier smoke, marquee removed

**Focus:** Feedback: offset client cards out; marquee banner out ("cheesy"); wordmark back to lighter Syne cut; hero motion invisible — make it clearly alive but not busy.

**Changes made:**
- WorkGallery: client work is now a **stacking deck** — full-width cards (screenshot left / info right, flush, no offsets); each card is sticky and the next slides over it while the covered card scales to 0.94 and dims (ScrollTrigger scrub). Pitch strip is the final card. Mobile/reduced-motion: plain stack.
- MarqueeBand removed from the page (component file kept).
- .font-wordmark: weight 800→400, positive tracking — the lighter Syne logotype from the previous build.
- Molten shader amped: faster (0.055), brighter charcoal/ember, glow 0.55, and the cursor now **bends the smoke field around itself** (domain offset by exp-falloff) plus a heat bloom — motion is unmistakable but still atmospheric.

**What's next:** User review; consider sweeping Martian Mono into V1-derived inner pages for consistency.

### 2026-06-11 (iteration 5) — Blue/orange sky, LOB color-coding, browser-stage client showcase

**Focus:** Feedback: add navy to the hero clouds; remove cryptic hero meta labels (coordinates etc.); blue hover for Design & Build lane vs orange for Agentic; third take on client work display.

**Changes made:**
- Shader: second fbm cloud system mixes deep navy banks (+blue glow crests) into the ember smoke; cool yields where embers burn — blue/orange weather fronts sharing one sky. Opacity fade-in sped up (0.05/frame). NOTE: headless shader verification must account for the fade — early captures show a black canvas (burned an hour on phantom "no blue" measurements).
- Hero bottom strip: removed "smoke follows cursor" + lat/long gimmick labels; centered SCROLL indicator only.
- PracticesSplit: lanes carry `tone` — Design & Build rows/labels/CTA highlight blue, Agentic AI stays amber.
- WorkGallery (take 3): **browser-stage showcase** — left selector rail (active client = blue edge, tags, auto-rotate progress hairline), right browser-chrome frame (traffic dots, live URL bar, LIVE SITE link) with crossfading screenshots and a per-client stat strip. Auto-rotates every 6s, pauses on hover, click to switch. Section is fully blue-coded incl. pitch strip.

**What's next:** User review of the showcase; if approved, consider blue accents in Capabilities-equivalent areas of inner pages.

### 2026-06-11 (iteration 6) — Conversion plumbing: form, process strip, session preloader

**Focus:** Close the "great brochure, weak close" gap (items 2–4 of the conversion review; testimonials pending user).

**Changes made:**
- `ContactForm.tsx` — short form in the footer (name, email, "I need…" toggle, message). Posts to Formspree when `NEXT_PUBLIC_FORMSPREE_ID` is set (same pattern as the Revive Resume build); until then falls back to a prefilled mailto draft so no lead is dropped. Success state promises a reply within one business day.
- `HowItWorks.tsx` — "// 05 / Three steps. Zero mystery." — The Call (free 20 min, fixed quote, no obligation) → The Build (clickable progress on a real URL) → The Launch (handover + supported after ship). No invented pricing; "weeks, not months" is the only timeline claim.
- `FooterV2` — monument left / form right; email + LinkedIn demoted to ghost buttons; operator label renumbered // 06.
- Preloader — once per browser session via sessionStorage flag.
- `.env.example` with NEXT_PUBLIC_FORMSPREE_ID.

**Gotcha:** verified-stale-browser-tab strikes again — server HTML was correct while the MCP tab showed a cached page; cache-busted reload confirmed everything.

**What's next:** User gathering testimonials from Kent + Lauren; create a Formspree form and set the env var in Vercel before deploy.

### 2026-06-11 (iteration 7) — Contextual cursor lens

**Focus:** User judgment call (agreed): always-on custom cursor is friction; native cursor everywhere, lens only on rich targets.

**Changes made:** Cursor.tsx rewritten — no more dot+ring or `cursor: none`; a labeled lens ("VISIT ↗" on the browser stage, "EMAIL →" on the monument) fades/scales in beside the native pointer over `[data-cursor="view"]` targets only. CSS simplified accordingly. `data-cursor="link"` attrs left in markup but now inert.
