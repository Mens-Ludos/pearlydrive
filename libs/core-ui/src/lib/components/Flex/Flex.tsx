import styled from '@emotion/styled';
import { flexbox } from 'styled-system';

import type { FlexProps } from './Flex.props';

import { Box } from '../Box';

export const Flex = styled(Box)<FlexProps>(flexbox, (props) => ({
  display: 'flex',
  gap: props.gap || '',
}));
