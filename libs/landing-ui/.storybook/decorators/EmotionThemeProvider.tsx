import React from 'react';

import { LandingThemeProvider } from '../../src';

export const EmotionThemeProvider = (Story: React.FC) => (
  <LandingThemeProvider>
    <Story />
  </LandingThemeProvider>
);
