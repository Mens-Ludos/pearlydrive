import type { BoxProps } from '@pearlydrive/core-ui';

export type CardAppearance = 'white' | 'ghost' | 'purple';

export interface CardProps extends BoxProps {
  appearance?: CardAppearance;
}
