import { Theme } from '@emotion/react';
import type { BaseTheme } from '@pearlydrive/core-ui';
import type { PropsWithChildren } from 'react';

import '@emotion/react';

export type Colors = {
  primary: {
    white: string;
    black: string;
    purple: string;
    purpleLight: string;
    gray: string;
  };
};

export interface LandingTheme extends BaseTheme {
  colors: Colors;
}

declare module '@emotion/react' {
  export interface Theme extends LandingTheme {}
}

export interface LandingThemeProviderProps extends PropsWithChildren {}

export type Styled<T> = T & {
  theme: Theme;
};
