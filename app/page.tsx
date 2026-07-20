import { ArrowRight, BookOpen, Boxes, GitPullRequest, Search } from 'lucide-react';
import Link from 'next/link';

const entries = [
  {
    title: 'Start Here',
    description: 'Role, context, and the handbook frame before the rest of the tree.',
    href: '/docs',
  },
  {
    title: 'How We Build',
    description: 'Build, reuse, buy, product restraint, and reliability.',
    href: '/docs/how-we-build/build-reuse-or-buy',
  },
  {
    title: 'Discover and Define',
    description: 'Problem framing, discovery signals, and metrics that support decisions.',
    href: '/docs/discover-and-define/discovery-and-framing',
  },
  {
    title: 'Deliver',
    description: 'Tickets, backlog hygiene, bugs, spikes, and delivery tradeoffs.',
    href: '/docs/deliver/stories-bugs-and-spikes',
  },
  {
    title: 'Work with Engineering',
    description: 'Software, cost, and delivery signals PMs need to manage risk.',
    href: '/docs/work-with-engineering/software-basics-for-pms',
  },
  {
    title: 'AI-Enabled Development',
    description: 'Separate useful automation from hype and keep production accountability intact.',
    href: '/docs/ai-enabled-development/ai-separating-truth-from-hype',
  },
] as const;

export default function HomePage() {
  return (
    <main className="pmh-home">
      <section className="pmh-home-header">
        <p className="pmh-eyebrow">Product Management Handbook</p>
        <h1>A compact field guide for product judgment under constraint.</h1>
        <p className="pmh-home-lede">
          Guidance for B2B Product Managers working with Design and Engineering in
          regulated industries, startups, and scale-ups.
        </p>
        <div className="pmh-home-meta">
          <span>Written by Shane Quinlan</span>
          <span aria-hidden="true">/</span>
          <span>B2B, regulated, smaller orgs</span>
        </div>
        <div className="pmh-home-actions">
          <Link className="pmh-button" href="/docs">
            <BookOpen aria-hidden="true" />
            Start here
          </Link>
          <Link className="pmh-button secondary" href="/docs/reference/decision-tenets">
            <Boxes aria-hidden="true" />
            Decision tenets
          </Link>
          <Link className="pmh-button secondary" href="/docs/reference/sources-and-further-reading">
            <Search aria-hidden="true" />
            Sources
          </Link>
        </div>
      </section>

      <section aria-label="Handbook sections" className="pmh-home-grid">
        {entries.map((entry) => (
          <Link className="pmh-entry-card" href={entry.href} key={entry.href}>
            <span>
              <h2>{entry.title}</h2>
              <p>{entry.description}</p>
            </span>
            <ArrowRight aria-hidden="true" />
          </Link>
        ))}
      </section>

      <section className="pmh-note">
        <p>
          <strong>This is a handbook, not a mandate.</strong> It is meant to help PMs
          make better calls about tradeoffs, clarity, reliability, and delivery.
        </p>
        <p>
          It comes from Shane Quinlan&apos;s experience in startups and scale-ups across cyber,
          compliance, healthcare, defense, and fintech. It is not trying to be a
          B2C growth manual or a mature big-tech operating model.
        </p>
      </section>

      <section className="pmh-home-grid" aria-label="Editorial principles">
        <div className="pmh-entry-card">
          <span>
            <h2>Starting points matter.</h2>
            <p>Build, reuse, buy, simplify, or stop. Each choice has a cost.</p>
          </span>
          <Boxes aria-hidden="true" />
        </div>
        <div className="pmh-entry-card">
          <span>
            <h2>Process is not truth.</h2>
            <p>Artifacts help when they clarify decisions. They decay when they perform certainty.</p>
          </span>
          <BookOpen aria-hidden="true" />
        </div>
        <div className="pmh-entry-card">
          <span>
            <h2>Delivery has signals.</h2>
            <p>Tickets, PRs, tests, and dependencies tell a PM where risk is accumulating.</p>
          </span>
          <GitPullRequest aria-hidden="true" />
        </div>
      </section>
    </main>
  );
}
