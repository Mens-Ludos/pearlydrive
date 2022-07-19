import type { BoxProps } from '@pearlydrive/core-ui';

export interface ProgressBarProps extends BoxProps {
  max?: number;
  value: number;
}
