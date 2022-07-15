import styled from '@emotion/styled';
import { Flex } from '@pearlydrive/core-ui';
import React from 'react';

import type { TagProps } from './Tag.props';

import { Text } from '../Text';

export const Tag = styled(({ children, ...props }: TagProps) => (
  <Flex alignItems="center" justifyContent="center" {...props}>
    <Text
      fontWeight={600}
      fontFamily="Montserrat"
      fontSize="15px"
      lineHeight="18px"
      color="primary.white"
    >
      {children}
    </Text>
  </Flex>
))<TagProps>(({ theme }) => ({
  textTransform: 'uppercase',
  borderRadius: '7px',
  textAlign: 'center',
  color: theme.colors.primary.white,
}));
