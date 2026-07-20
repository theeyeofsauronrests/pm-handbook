import type { ReactNode } from 'react';

type PanelProps = {
  children: ReactNode;
  title?: string;
};

type Source = {
  href: string;
  label: string;
};

export function Principle({ children, title = 'Principle' }: PanelProps) {
  return (
    <aside className="pmh-mdx-panel" data-tone="principle">
      <p className="pmh-mdx-panel-title">{title}</p>
      <div>{children}</div>
    </aside>
  );
}

export function PMTakeaway({ children, title = 'PM Takeaway' }: PanelProps) {
  return (
    <aside className="pmh-mdx-panel" data-tone="takeaway">
      <p className="pmh-mdx-panel-title">{title}</p>
      <div>{children}</div>
    </aside>
  );
}

export function Warning({ children, title = 'Warning' }: PanelProps) {
  return (
    <aside className="pmh-mdx-panel" data-tone="warning">
      <p className="pmh-mdx-panel-title">{title}</p>
      <div>{children}</div>
    </aside>
  );
}

export function LLMLeverage({ children, title = 'LLM Leverage' }: PanelProps) {
  return (
    <aside className="pmh-mdx-panel" data-tone="llm">
      <p className="pmh-mdx-panel-title">{title}</p>
      <div>{children}</div>
    </aside>
  );
}

export function SourceList({ sources }: { sources: Source[] }) {
  return (
    <ul className="pmh-source-list">
      {sources.map((source) => (
        <li key={source.href}>
          <a href={source.href}>{source.label}</a>
        </li>
      ))}
    </ul>
  );
}

export function ArtifactPath({ children }: { children: ReactNode }) {
  return <code className="pmh-artifact-path">{children}</code>;
}
