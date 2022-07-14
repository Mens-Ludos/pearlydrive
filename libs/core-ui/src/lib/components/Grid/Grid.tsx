import styled from '@emotion/styled';
import { flexbox, grid } from 'styled-system';

import type { GridProps } from './types';

import { Box } from '../Box';

export const Grid = styled(Box)<GridProps>`
  display: grid;
  ${({ gridGaps }) => gridGaps && `grid-grap: ${gridGaps};`}
  ${({ gridRowGaps }) => gridRowGaps && `row-gap: ${gridRowGaps};`}
  ${({ gridColumnGaps }) => gridColumnGaps && `column-gap: ${gridColumnGaps};`}
  ${flexbox}
  ${grid}
`;
