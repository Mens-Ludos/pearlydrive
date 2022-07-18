import type { CardProps } from './Card.props';

import type { Styled } from '../../theme';

export const background = ({ theme, appearance }: Styled<CardProps>) => {
  const get = () => {
    switch (appearance) {
      case 'white':
        return theme.colors.primary.white;
      case 'purple':
        return theme.colors.primary.purpleLight;
      case 'ghost':
        return 'rgba(255 255 255 / 0.07)';
      default:
        return '';
    }
  };

  return `background: ${get()};`;
};

export const boxShadow = ({ appearance }: Styled<CardProps>) => {
  const get = () => {
    switch (appearance) {
      case 'white':
        return '0px 0px 96px -15px rgba(0, 0, 0, 0.25)';
      case 'purple':
        return '5px 5px 20px 2px rgba(0, 0, 0, 0.25)';
      default:
        return '';
    }
  };
  return `box-shadow: ${get()};`;
};

export const color = ({ theme }: Styled<CardProps>) => {
  const get = () => theme.colors.primary.white;
  return `color: ${get()};`;
};
