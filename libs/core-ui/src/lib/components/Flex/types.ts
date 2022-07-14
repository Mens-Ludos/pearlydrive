import type { FlexboxProps } from 'styled-system';

import type { BoxProps } from '../Box';

export interface FlexProps extends BoxProps, FlexboxProps {
  gap?: string;
}
