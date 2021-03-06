import styled from '@emotion/styled';
import { background, border, layout, position, space } from 'styled-system';

import type { BoxProps } from './Box.props';

export const Box = styled.div<BoxProps>(
  background,
  border,
  layout,
  position,
  space,
);
