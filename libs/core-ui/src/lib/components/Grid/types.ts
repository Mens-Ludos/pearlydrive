import type { FlexboxProps, GridProps as GridProps$1 } from 'styled-system';

import type { BoxProps } from '../Box';

export interface GridProps extends BoxProps, FlexboxProps, GridProps$1 {
  gridGaps?: string;
  gridRowGaps?: string;
  gridColumnGaps?: string;
}
