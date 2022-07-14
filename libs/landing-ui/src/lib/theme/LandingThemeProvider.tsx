import { ThemeProvider } from '@emotion/react';
import React from 'react';

import { landingTheme } from './landingTheme';
import type { LandingThemeProviderProps } from './types';

export const LandingThemeProvider: React.FC<LandingThemeProviderProps> = ({
  children,
}) => <ThemeProvider theme={landingTheme}>{children}</ThemeProvider>;
