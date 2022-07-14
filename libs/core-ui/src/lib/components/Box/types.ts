import type { HTMLAttributes } from 'react';
import type {
  BackgroundProps,
  BorderProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';

export interface BoxProps
  extends BackgroundProps,
    BorderProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    HTMLAttributes<HTMLDivElement> {}
