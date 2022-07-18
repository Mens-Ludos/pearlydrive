import { CardProps } from '../Card';

type PersonCardAppearance = 'founder' | 'person';

export interface PersonCardProps extends Omit<CardProps, 'appearance'> {
  name: string;
  tag: string;
  imageSrc: string;
  appearance?: PersonCardAppearance;
}
