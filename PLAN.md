# Product Management Handbook Project Notes

## Current State

The handbook is live at [shanes-pm-handbook.vercel.app](https://shanes-pm-handbook.vercel.app/).

It is a production-ready Next.js/Fumadocs documentation site for Shane Quinlan's Product Management Handbook. The site is dark mode only, public, and designed for straightforward Markdown/MDX maintenance.

The handbook is written for B2B Product Managers in regulated or compliance-heavy startups and scale-ups. It is not a B2C growth playbook, a corporate policy portal, or a mature big-tech operating model.

## Current Stack

- Next.js App Router
- TypeScript
- Fumadocs UI
- Fumadocs MDX
- Tailwind CSS
- pnpm
- Node.js 22+
- Vercel

## Implemented

- Built the docs site with Fumadocs navigation, mobile navigation, search, right-side table of contents, and previous/next links.
- Implemented a dark-only visual direction: restrained surfaces, high contrast, no theme switcher, and no light-theme fallback.
- Imported and refined the handbook content into editable MDX under `content/docs`.
- Generalized old internal/product-specific language into public, portable language.
- Added explicit audience framing for smaller B2B organizations in regulated or compliance-heavy contexts.
- Added author context and resource links in `About Shane Quinlan`.
- Added custom MDX components: `Principle`, `PMTakeaway`, `Warning`, `LLMLeverage`, `BadBetter`, `SourceList`, and `ArtifactPath`.
- Added responsible LLM guidance that treats AI as a thinking aid, not a substitute for PM accountability.
- Added engineering-facing PM guidance for cloud costs, dependencies, PR/MR reading, SemVer, CI/CD, APIs, and delivery signals.
- Added security headers, production metadata, sitemap, robots, and Vercel-ready build configuration.
- Pinned dependency versions and added a pnpm override for patched `postcss`.

## Editorial Direction

The handbook should stay:

- Direct
- Succinct
- Opinionated
- Skeptical of process theater
- Clear about politics and accountability
- Useful for Product, Design, and Engineering collaboration
- Maintainable as Markdown

It should not drift into:

- Generic product-management encyclopedia content
- A certification course
- A template library
- A big-tech operating model
- A personal marketing site

## Remaining Author Review

The highest-value next work is a small number of public-safe examples that show product judgment in motion:

- A cloud-cost tradeoff example, such as refresh rate, retention, fan-out, map tiles, or idle capacity.
- A backlog example showing a stale item archived, reframed, or promoted using current knowledge.
- A complete short Blog / FAQ sample.
- A roadmap confidence example showing work moved from committed to exploratory.
- An LLM-generated ticket corrected by a PM who understands intent, risk, and impact.
- An AI artifact promotion example, once the operating stance is settled.

See [CRITICAL_ANALYSIS.md](./CRITICAL_ANALYSIS.md) for the current editorial critique.

## Validation

Run before pushing:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

For local review:

```bash
pnpm dev
```

or:

```bash
pnpm exec next dev --port 3002
```
