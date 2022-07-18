import { Box, ResetCSS } from '@pearlydrive/core-ui';
import { addDecorator } from '@storybook/react';

import { EmotionThemeProvider } from './decorators/EmotionThemeProvider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'light',
        value: '#FFFFFF',
      },
      {
        name: 'dark',
        value: '#333333',
      },
    ],
  },
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

addDecorator((Story) => (
  <Box>
    <ResetCSS />
    <Story />
  </Box>
));

addDecorator(EmotionThemeProvider);
