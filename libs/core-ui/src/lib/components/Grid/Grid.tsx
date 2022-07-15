import styled from '@emotion/styled';
import { flexbox, grid } from 'styled-system';

import type { GridProps } from './Grid.props';

import { Box } from '../Box';

export const Grid = styled(Box)<GridProps>(flexbox, grid, (props) => ({
  display: 'grid',
  gridGap: props.gridGaps || '',
  rowGap: props.gridRowGaps || '',
  columnGap: props.gridColumnGaps || '',
}));
