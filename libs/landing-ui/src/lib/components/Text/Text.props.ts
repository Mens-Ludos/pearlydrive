import type { Theme } from '@emotion/react';
import type { ReactNode } from 'react';
import type { LayoutProps, SpaceProps, TypographyProps } from 'styled-system';
import '../../theme/types';

export const sizes = {
  xxs: '12px',
  xs: '14px',
  sm: '16px',
  md: '24px',
  lg: '36px',
  xl: '40px',
  xxl: '64px',
  xxxl: '75px',
  xxxxl: '90px',
};

export type TextSize = keyof typeof sizes;

export interface TextProps extends SpaceProps, TypographyProps, LayoutProps {
  color?: string;
  fontSize?: string;
  bold?: boolean;
  size?: TextSize;
  ellipsis?: boolean;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
  children?: ReactNode;
}

export interface ThemedTextProps extends TextProps {
  theme: Theme;
}
