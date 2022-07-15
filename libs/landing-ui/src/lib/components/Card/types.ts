import type { BoxProps } from '@pearlydrive/core-ui';

type CardAppearance = 'white' | 'ghost' | 'purple';

export interface CardProps extends BoxProps {
  appearance?: CardAppearance;
}
