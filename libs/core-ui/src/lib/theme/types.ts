import type { ReactNode } from 'react';

export type State = {
  [key: string]: boolean;
};

export type BreakpointChecks = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
} & State;

export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
};

export type MediaQueriesAbstract = {
  [key: string]: string;
};

export type BaseTheme = {
  siteWidth: number;
  mediaQueries: MediaQueries;
  breakpoints: Breakpoints;
};

export type BaseThemeProviderProps = {
  children: ReactNode;
};
