import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';

import {
  ArtifactPath,
  BadBetter,
  LLMLeverage,
  PMTakeaway,
  Principle,
  SourceList,
  Warning,
} from './handbook-components';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    ArtifactPath,
    BadBetter,
    LLMLeverage,
    PMTakeaway,
    Principle,
    SourceList,
    Warning,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
