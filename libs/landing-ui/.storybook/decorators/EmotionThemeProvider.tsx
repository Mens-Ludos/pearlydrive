import React, { ReactNode } from 'react';

import { LandingThemeProvider } from '../../src';

export const EmotionThemeProvider = (storyFn: () => ReactNode) => (
  <LandingThemeProvider>{storyFn()}</LandingThemeProvider>
);
