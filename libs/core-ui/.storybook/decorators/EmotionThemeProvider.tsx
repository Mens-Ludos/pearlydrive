import React, { ReactNode } from 'react';

import { BaseThemeProvider } from '../../src';

export const EmotionThemeProvider = (storyFn: () => ReactNode) => (
  <BaseThemeProvider>{storyFn()}</BaseThemeProvider>
);
