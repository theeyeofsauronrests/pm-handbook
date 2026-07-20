# Product Management Handbook

A dark-only documentation site for Shane Quinlan's Product Management Handbook.

Live site: [shanes-pm-handbook.vercel.app](https://shanes-pm-handbook.vercel.app/)

GitHub repo: [theeyeofsauronrests/pm-handbook](https://github.com/theeyeofsauronrests/pm-handbook)

## Contents

- [What This Is](#what-this-is)
- [Stack](#stack)
- [Local Setup](#local-setup)
- [Useful Commands](#useful-commands)
- [Project Structure](#project-structure)
- [Content Map](#content-map)
- [Content Authoring](#content-authoring)
- [MDX Components](#mdx-components)
- [Validation Checklist](#validation-checklist)
- [Deployment](#deployment)
- [Public-Repo Hygiene](#public-repo-hygiene)
- [Editorial Status](#editorial-status)

## What This Is

This is a compact field guide for B2B Product Managers working with Design and Engineering in regulated or compliance-heavy startups and scale-ups.

It is not a B2C growth playbook, a corporate policy portal, a certification course, or a mature big-tech operating model. The handbook is intentionally opinionated: Product Management is judgment under constraint, and artifacts are useful only when they improve decisions.

The site uses Markdown/MDX content, Fumadocs for docs navigation and search, and Next.js App Router for routing and static generation.

## Stack

- Next.js App Router
- TypeScript
- Fumadocs UI
- Fumadocs MDX
- Tailwind CSS
- pnpm
- Node.js 22+
- Vercel

The site is dark mode only. There is no theme switcher and no light-theme fallback.

## Local Setup

Use Node.js 22 or newer and pnpm.

```bash
pnpm install
```

Run the local development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). The handbook starts at `/docs`.

To use a different port:

```bash
pnpm exec next dev --port 3002
```

## Useful Commands

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Run all three before pushing changes.

## Project Structure

```text
app/
  docs/
    [[...slug]]/page.tsx  # Fumadocs page renderer
    layout.tsx            # Docs shell with sidebar, search, and TOC
  api/search/route.ts     # Fumadocs search endpoint
  layout.tsx              # Root metadata, dark mode, and provider config
  page.tsx                # Compact homepage
components/mdx/           # Custom handbook MDX components
content/docs/             # Editable handbook pages and meta.json files
lib/
  source.ts               # Fumadocs content loader
  layout.shared.tsx       # Shared docs layout options
CRITICAL_ANALYSIS.md      # Editorial critique and next recommendations
PLAN.md                   # Implementation notes and remaining author review
README.md                 # Repo guide
```

## Content Map

The handbook content lives in `content/docs`:

- `start-here`: product role, author bio, and how to use the handbook
- `discover-and-define`: discovery, Blog / FAQ, metrics, and design systems
- `how-we-build`: build/reuse/buy, product restraint, and Product/Design/Engineering collaboration
- `deliver`: stories, bugs, spikes, backlog management, delivery, and roadmap abstractions
- `work-with-engineering`: software basics, PR/MR reading, SemVer, dependencies, and cloud costs
- `ai-enabled-development`: AI hype, responsible LLM use, and the AI-enabled product development charter
- `reference`: decision tenets, glossary, and sources

Navigation order is controlled with `meta.json` files in each folder.

## Content Authoring

Add or edit pages in `content/docs`.

Each page should start with frontmatter:

```mdx
---
title: Reading PRs and MRs
description: How PMs use code-change proposals as signals for progress, scope, and risk.
---
```

Use `meta.json` inside a folder to control navigation order:

```json
{
  "title": "Work with Engineering",
  "pages": ["software-basics-for-pms", "reading-prs-mrs"]
}
```

Keep new pages short and specific. A clear placeholder is better than generic product-management filler.

## MDX Components

The site includes local components for handbook-specific notes and references:

```mdx
<Principle>
Choose the starting point deliberately.
</Principle>

<PMTakeaway>
Ask what the system does when it is wrong.
</PMTakeaway>

<Warning title="Content gap">
This page needs author-approved source material.
</Warning>

<LLMLeverage>
Use LLMs to organize and critique PM work, not to outsource judgment.
</LLMLeverage>

<BadBetter>
**Bad:** "Customers need better reporting."

**Better:** "Support leaders cannot tell which customers are repeatedly hitting the same onboarding failure until escalations appear."
</BadBetter>

<SourceList
  sources={[
    { label: 'Semantic Versioning', href: 'https://semver.org/' },
  ]}
/>

<ArtifactPath>Prototype -> Incubation -> Production-bound contribution</ArtifactPath>
```

Use `BadBetter` sparingly. It should show a decision getting sharper, not just nicer wording.

## Validation Checklist

Before pushing, run:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

For a local smoke test, run the dev server and check:

- `/` loads the compact homepage.
- `/docs` loads the handbook entry page.
- `/docs/start-here/about-shane-quinlan` loads the author bio.
- `/docs/discover-and-define/blog-faq` loads the Blog / FAQ guide.
- `/docs/discover-and-define/metrics-and-signals` renders `BadBetter`.
- `/docs/work-with-engineering/cloud-costs-for-pms` loads the cloud-cost guidance.
- Search opens with `Cmd+K` or `Ctrl+K`.
- Mobile navigation works.
- No theme switcher appears.

## Deployment

The production site is deployed on Vercel:

[https://shanes-pm-handbook.vercel.app/](https://shanes-pm-handbook.vercel.app/)

Recommended Vercel settings:

| Setting | Value |
| --- | --- |
| Framework preset | Next.js |
| Install command | `pnpm install` |
| Build command | `pnpm build` |
| Output directory | `.next` |
| Node.js version | 22.x |

No database, CMS, authentication service, or custom server is required.

## Public-Repo Hygiene

The repo intentionally ignores generated output, local secrets, local machine files, and dependency directories:

- `.env*`
- `.next/`
- `.source/`
- `node_modules/`
- `tsconfig.tsbuildinfo`
- `.vercel/`
- logs and test reports

Do not commit source handoff packets, private notes, tokens, generated build output, or local environment files.

## Editorial Status

The handbook is publishable, but still intentionally incomplete. The next useful content work is not more breadth. It is a small number of public-safe examples that show product judgment in motion.

Current priorities are tracked in [CRITICAL_ANALYSIS.md](./CRITICAL_ANALYSIS.md):

- A cloud-cost tradeoff example
- A backlog archive/reframe example
- A complete short Blog / FAQ sample
- An AI artifact promotion example, once the operating stance is settled
