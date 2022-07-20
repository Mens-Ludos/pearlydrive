import styled from '@emotion/styled';
import type { BoxProps } from '@pearlydrive/core-ui';
import { Box } from '@pearlydrive/core-ui';
import React from 'react';

export interface SVGComponent extends React.FC<React.SVGProps<SVGSVGElement>> {}

const Image = styled(Box)(({ theme }) => ({
  fill: 'white',
  color: 'white',

  '& > *': {
    fill: 'white',
    color: 'white',
    transition: '0.2s ease-in-out',
  },

  '& > *:hover': {
    fill: theme.colors.primary.purpleLight,
    color: theme.colors.primary.purpleLight,
  },
}));

export const icon =
  (Component: SVGComponent, containerProps?: BoxProps): SVGComponent =>
  (iconProps) =>
    (
      <Image {...containerProps}>
        <Component {...iconProps} />
      </Image>
    );
