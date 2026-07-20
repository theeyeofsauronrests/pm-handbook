# Product Management Handbook Implementation Plan

## Grounding

- Primary authority is `CODEX_HANDOFF.md`.
- Visual direction comes from `DESIGN_DIRECTION.md` and the DefSimple reference: dark, controlled, technical, high-contrast, and restrained.
- Navigation follows `CONTENT_ARCHITECTURE.md`.
- Seed articles in `seed-content/` are canonical starting copy. They will be tightened lightly, not rewritten into generic management prose.

## Conflicts and Assumptions

- The handoff includes organization-specific names that should not appear in the public handbook. The site will name the project as Shane Quinlan's Product Management Handbook and keep the framing organization-neutral.
- Fumadocs documentation currently assumes Node.js 22+, Next.js 16, Tailwind CSS 4, `source.config.ts`, `createMDX`, and `collections/*` generated from `.source`. The implementation will follow those conventions.
- Some first-release topics began without publish-ready source copy. They have been drafted conservatively and should receive author review before publication.

## Build Plan

1. Scaffold a Next.js App Router project with TypeScript, pnpm, Tailwind CSS 4, Fumadocs UI, and Fumadocs MDX.
2. Configure Fumadocs MDX under `content/docs`, generate the page tree from `meta.json`, and expose search through the built-in Orama-backed API.
3. Implement dark-only behavior at the document and provider level: no theme switcher, no light first paint, dark color scheme, and restrained global CSS.
4. Build the homepage as a compact handbook entry point, not a marketing funnel.
5. Import the ready seed articles as MDX and organize the IA into docs folders with navigation metadata.
6. Add the requested MDX components: `Principle`, `PMTakeaway`, `Warning`, `SourceList`, and `ArtifactPath`.
7. Add concise draft pages for content gaps that require Shane or source-material review.
8. Write README instructions for local development, content authoring, navigation, validation, and Vercel deployment.
9. Validate with `pnpm dev`, `pnpm build`, `pnpm lint`, and `pnpm typecheck`.

## Applied Source Expansion

- Added source-backed guidance for metrics as decision signals, emphasizing outcomes, leading indicators, and misuse risks.
- Added source-backed guidance for cloud costs, translating FinOps concepts into product behavior: rate, time, scale, refresh frequency, retention, fan-out, map tiles, idle behavior, and always-on capacity.
- Folded the new delivery source into existing pages for tickets, stories, bugs, spikes, backlog management, roadmaps, agile delivery, branching, and CI/CD without splitting every artifact into a separate thin page.
- Folded the design and discovery source into the existing discovery/design pages while removing organization-specific tooling and any assumption that reuse is the default answer.
- Folded `Product_Handbook_v3_Draft.md` into the public handbook where it added authorial point of view: Product Manager versus Product Owner, Product Trio, continuous discovery, design handoff, just-enough ticket writing, Scrum Master as facilitation, and skepticism toward scaled-process theater.
- Added a sparse `LLMLeverage` callout pattern for responsible AI use in PM workflows, focused on structure, critique, and clustering rather than outsourcing judgment.
- Added explicit audience framing: B2B Product Management in regulated or compliance-heavy startups and scale-ups, based on Shane's experience across cyber, compliance, healthcare, defense, and fintech. The handbook is not positioned as a B2C growth playbook or mature big-tech operating model.
- Kept the Lenny skills material as an analysis rubric, not a replacement voice.

## Remaining Author Review

- Add public, source-approved examples for discovery framing, cost tradeoffs, roadmap confidence, and AI artifact promotion.
- Decide whether cloud-cost guidance should include one detailed example system or stay pattern-based.
- Review glossary terms for which definitions should remain in the public handbook.
- Confirm whether any highly regulated environment examples should be explicit or kept generalized.
- Final source notes and author-approved references.
