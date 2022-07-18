import type { BoxProps } from '@pearlydrive/core-ui';

import type { ProgressBarProps } from '../ProgressBar';

export interface SupplyItemProps
  extends Omit<ProgressBarProps, keyof BoxProps> {
  name: string;
  percents: number;
}

export interface SupplyCardProps extends BoxProps {
  items: SupplyItemProps[];
}
