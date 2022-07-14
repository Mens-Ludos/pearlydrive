import { Box, ResetCSS } from '@pearlydrive/core-ui';
import { addDecorator } from '@storybook/react';

import { EmotionThemeProvider } from './decorators/EmotionThemeProvider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: {
      L: {
        name: 'L',
        styles: {
          width: '1440px',
          height: '963px',
        },
      },
      SM: {
        name: 'SM',
        styles: {
          width: '390px',
          height: '844px',
        },
      },
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((story) => (
  <Box>
    <ResetCSS />
    {story()}
  </Box>
));

addDecorator(EmotionThemeProvider);
