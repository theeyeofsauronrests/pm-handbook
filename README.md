# Product Management Handbook

A dark-only documentation site for Shane Quinlan's Product Management Handbook.

## Installation

Use Node.js 22 or newer and pnpm.

```bash
pnpm install
```

This installs Next.js, Fumadocs UI, Fumadocs MDX, Tailwind CSS, and the small set of supporting packages used by the site.

## Quick Start

Run the local development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). The handbook itself starts at `/docs`.

## What is this?

This repository builds a succinct Product Management Handbook as a production-ready documentation site. It uses Markdown/MDX for content, Fumadocs for the documentation layout and search, and Next.js App Router for routing and static generation.

The site is intentionally dark mode only. There is no theme switcher and no light theme fallback.

## Why this shape?

The handbook is meant to be a compact field guide, not a policy portal or a large internal wiki. Most article copy lives under `content/docs` so it stays easy to edit, review, and move.

Fumadocs generates the left navigation from the content tree and `meta.json` files. The page layout provides the reading column, right-side table of contents, search dialog, mobile navigation, and previous/next page links.

## Project Structure

```text
app/
  docs/
    [[...slug]]/page.tsx  # Fumadocs page renderer
    layout.tsx            # Docs shell with sidebar and search
  api/search/route.ts     # Built-in Fumadocs search endpoint
components/mdx/           # Custom handbook MDX components
content/docs/             # Editable handbook pages and meta.json files
lib/
  source.ts               # Fumadocs content loader
  layout.shared.tsx       # Shared layout options
PLAN.md                   # Implementation plan and content gaps
```

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

Keep placeholders short when source material is missing. The handbook should not be padded with generic product-management copy.

## MDX Components

The site adds a few local components for handbook-specific notes:

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

<SourceList
  sources={[
    { label: 'Semantic Versioning', href: 'https://semver.org/' },
  ]}
/>

<ArtifactPath>Prototype → Incubation → Program commit</ArtifactPath>
```

## Validation

Run these before opening a pull request:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

For local smoke testing, also run:

```bash
pnpm dev
```

Then check:

- `/` loads the compact homepage.
- `/docs` loads the handbook entry page.
- `/docs/discover-and-define/metrics-and-signals` loads the metrics guidance.
- `/docs/work-with-engineering/cloud-costs-for-pms` loads the cloud-cost guidance.
- Search opens with `Cmd+K` or `Ctrl+K`.
- Mobile navigation works.
- Direct links to nested docs pages load correctly.
- No theme switcher appears.

## Vercel Deployment

Connect the repository to Vercel as a Next.js project.

Recommended settings:

| Setting | Value |
| --- | --- |
| Framework preset | Next.js |
| Install command | `pnpm install` |
| Build command | `pnpm build` |
| Output directory | `.next` |
| Node.js version | 22.x |

Vercel preview deployments should work for pull requests once the GitHub repository is connected. No database, CMS, authentication service, or custom server is required for the first release.

## Author Review

The first release includes conservative draft content where source material was incomplete. See `PLAN.md` for the current review list.
