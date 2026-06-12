# CONVENTIONS.md

- **Truth in marketing copy.** No fabricated metrics, stats, or claims anywhere on the site — every number must be verifiable (years of experience, shipped products, live client sites). This site sells trust before it sells services.
- **Two-axis project model.** `kind` (client | product) decides which homepage section a project appears in; `lob` (design | agentic) decides its color family (blue | amber). Never conflate them.
- **Audience-appropriate language.** Design-LOB copy must be readable by a non-technical business owner. Agentic-LOB copy may use technical terms but still leads with outcomes.
- **Section labels stay sequential.** Homepage mono-labels (`// 01 / …` through `// 07 / …`) must be renumbered when sections are added, removed, or reordered.
- **Screenshots.** Project hero images are 1600×1000 PNGs in `public/images/projects/`; capture live sites with headless Chrome at that window size, fonts fully loaded.
- **Client data hygiene.** Client engagement repos (under `~/Workspace/emberonix-llc/Clients/`) may contain payment handles and personal contact info — never copy those into this public site.
- **Verify with `npm run build`** before calling any change done; it runs the typecheck.
