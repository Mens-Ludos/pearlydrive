import { getThemeValue } from '@pearlydrive/core-ui';

import type { TextProps, ThemedTextProps } from './Text.props';
import { sizes } from './Text.props';

export const getColor = ({ theme, color }: ThemedTextProps) => {
  return getThemeValue(theme)(`colors.${color}`, color);
};

export const getFontSize = ({ fontSize, size }: TextProps) => {
  return fontSize || sizes[size || 'md'];
};
