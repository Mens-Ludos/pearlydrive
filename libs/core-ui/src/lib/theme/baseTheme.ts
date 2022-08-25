import { SITE_WIDTH } from './constants';
import type { BaseTheme, Breakpoints, MediaQueries } from './types';

export const breakpointMap: { [key: string]: number } = {
  xs: 370,
  sm: 576,
  md: 852,
  lg: 968,
  xl: 1080,
  xxl: 1200,
  // xxxxl: 1810,
};

const breakpoints: Breakpoints = Object.values(breakpointMap).map(
  (breakpoint) => `${breakpoint}px`,
);

const mediaQueries: MediaQueries = {
  xs: `@media screen and (max-width: ${breakpointMap.xs}px)`,
  sm: `@media screen and (max-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (max-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (max-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (max-width: ${breakpointMap.xl}px)`,
  xxl: `@media screen and (max-width: ${breakpointMap.xxl}px)`,
  // xxxxl: `@media screen and (max-width: ${breakpointMap.xxxxl}px)`,
};

export const baseTheme: BaseTheme = {
  siteWidth: SITE_WIDTH,
  breakpoints,
  mediaQueries,
};
