import { getThemeValue } from '@pearlydrive/core-ui';

import { sizes, TextProps, ThemedTextProps } from './types';

export const getColor = ({ theme, color }: ThemedTextProps) => {
  console.log(theme);
  return getThemeValue(theme)(`colors.${color}`, color);
};

export const getFontSize = ({ fontSize, size }: TextProps) => {
  return fontSize || sizes[size || 'md'];
};
