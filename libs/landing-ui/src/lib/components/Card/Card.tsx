import styled from '@emotion/styled';
import { Box } from '@pearlydrive/core-ui';

import { background, boxShadow, color } from './styles';
import type { CardProps } from './types';

export const Card = styled(Box)<CardProps>(
  {
    borderRadius: '40px',
  },
  background,
  boxShadow,
  color
);
