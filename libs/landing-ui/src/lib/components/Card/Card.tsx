import styled from '@emotion/styled';
import { Box } from '@pearlydrive/core-ui';

import type { CardProps } from './Card.props';
import { background, boxShadow, color } from './styles';

export const Card = styled(Box)<CardProps>(background, boxShadow, color);
