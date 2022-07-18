import { BoxProps } from "@pearlydrive/core-ui";
import { BackgroundProps, LayoutProps, PositionProps } from "styled-system";
import { CardProps } from "../Card";

export interface HollowButtonProps extends BoxProps {
  title: string;
  capital?: boolean
}
