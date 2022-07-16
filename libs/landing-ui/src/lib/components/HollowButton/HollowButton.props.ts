import { BackgroundProps, LayoutProps, PositionProps } from "styled-system";
import { CardProps } from "../Card";

export interface HollowButtonProps extends
  BackgroundProps,
  LayoutProps,
  PositionProps {
  title: string;
  capital?: boolean
}
