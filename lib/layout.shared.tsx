import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="pmh-brand">
          <span>PM Handbook</span>
          <span aria-hidden="true">/</span>
          <span>Shane Quinlan</span>
        </span>
      ),
      transparentMode: 'none',
    },
    links: [
      {
        text: 'Start Here',
        url: '/docs',
        active: 'nested-url',
      },
      {
        text: 'Sources',
        url: '/docs/reference/sources-and-further-reading',
      },
    ],
  };
}
