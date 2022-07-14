import styled from '@emotion/styled';
import React from 'react';
import { layout, space, typography } from 'styled-system';

import { getColor, getFontSize } from './funcs';
import type { TextProps } from './types';

export const Text = styled.div<TextProps>`
  color: ${getColor};
  font-size: ${getFontSize};
  line-height: ${({ lineHeight }) =>
    lineHeight ? lineHeight.toString() : '1.5'};
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  ${({ ellipsis }) =>
    ellipsis &&
    `white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;`}

  ${space}
  ${typography}
  ${layout}
`;

Text.defaultProps = {
  color: 'black',
  size: 'md',
  ellipsis: false,
  fontFamily: 'Montserrat',
};

export const SmallText: React.FC<TextProps> = (props) => (
  <Text size="sm" {...props} />
);
export const MediumText: React.FC<TextProps> = (props) => (
  <Text size="md" {...props} />
);
export const LargeText: React.FC<TextProps> = (props) => (
  <Text size="lg" {...props} />
);
