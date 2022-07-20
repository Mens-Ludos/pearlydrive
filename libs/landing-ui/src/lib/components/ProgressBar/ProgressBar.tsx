import styled from '@emotion/styled';
import { Box } from '@pearlydrive/core-ui';
import type { FC } from 'react';

import type { ProgressBarProps } from './ProgressBar.props';

const ProgressBarInner = styled(Box)<ProgressBarProps>(
  {
    height: '32px',
    background: `linear-gradient(267.43deg, #CE89FF 0%, #A12AFF 100%)`,
    position: 'relative',
    '&:before': {
      position: 'absolute',
      top: 0,
      left: 0,
      content: '""',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(267.42deg, #CE09FF 0%, #A12AFF 100%)',
      opacity: 0.5,
      filter: 'blur(20px)',
    },
  },
  ({ max, value }) => ({
    width: `calc((100% / ${max || 100}) * ${value || 1})`,
  }),
);

export const ProgressBar: FC<ProgressBarProps> = ({ value, max, ...props }) => (
  <Box width="100%" {...props}>
    <ProgressBarInner value={value} max={max} />
  </Box>
);
