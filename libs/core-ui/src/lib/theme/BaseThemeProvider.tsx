import { ThemeProvider } from '@emotion/react';
import React from 'react';

import { baseTheme } from './baseTheme';
import type { BaseThemeProviderProps } from './types';

export const BaseThemeProvider: React.FC<BaseThemeProviderProps> = ({
  children,
}) => <ThemeProvider theme={baseTheme}>{children}</ThemeProvider>;
