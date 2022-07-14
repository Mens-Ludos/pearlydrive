import styled from '@emotion/styled';
import { flexbox } from 'styled-system';

import type { FlexProps } from './types';

import { Box } from '../Box';

export const Flex = styled(Box)<FlexProps>`
  display: flex;
  ${flexbox};
  ${({ gap }) => gap && `gap: ${gap}`};
`;
