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
        text: 'About Shane',
        url: '/docs/start-here/about-shane-quinlan',
      },
      {
        text: 'Sources',
        url: '/docs/reference/sources-and-further-reading',
      },
    ],
  };
}
