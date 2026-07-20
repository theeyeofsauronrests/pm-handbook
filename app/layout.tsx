import './global.css';

import { RootProvider } from 'fumadocs-ui/provider/next';
import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Product Management Handbook',
    template: '%s | Product Management Handbook',
  },
  description:
    'A compact field guide for B2B Product Managers in regulated industries and smaller organizations.',
  authors: [{ name: 'Shane Quinlan' }],
  applicationName: 'Product Management Handbook',
  metadataBase: new URL('https://shanes-pm-handbook.vercel.app'),
};

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#050505',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className="dark"
      data-theme="dark"
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col">
        <RootProvider
          theme={{
            enabled: false,
          }}
          search={{
            links: [
              ['Start Here', '/docs'],
              ['About Shane', '/docs/start-here/about-shane-quinlan'],
              ['Build, Reuse, or Buy', '/docs/how-we-build/build-reuse-or-buy'],
              ['Reading PRs and MRs', '/docs/work-with-engineering/reading-prs-mrs'],
            ],
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
