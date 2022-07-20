import type { ReactNode } from 'react';
import React from 'react';

import { BaseThemeProvider } from '../../src';

export const EmotionThemeProvider = (storyFn: () => ReactNode) => (
  <BaseThemeProvider>{storyFn()}</BaseThemeProvider>
);
