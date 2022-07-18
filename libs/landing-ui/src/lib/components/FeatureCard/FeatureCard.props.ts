import type { CardProps } from '../Card';

type FeatureCardAlign = 'left' | 'right';

export interface FeatureCardProps extends CardProps {
  title: string;
  subTitle: string;
  align?: FeatureCardAlign;
}
