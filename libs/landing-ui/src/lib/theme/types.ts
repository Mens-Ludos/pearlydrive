import type { BaseTheme } from '@pearlydrive/core-ui';
import type { ReactNode } from 'react';

import '@emotion/react';

export type Colors = {
  primary: {
    white: string;
    black: string;
    purple: string;
    gray: string;
  };
};

export interface LandingTheme extends BaseTheme {
  colors: Colors;
}

declare module '@emotion/react' {
  export interface Theme extends LandingTheme {}
}

export type LandingThemeProviderProps = {
  children: ReactNode;
};
