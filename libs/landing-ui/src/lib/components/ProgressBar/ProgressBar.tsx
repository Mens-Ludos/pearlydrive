import styled from '@emotion/styled';
import { Box } from '@pearlydrive/core-ui';

import { ProgressBarProps } from './ProgressBar.props';

export const ProgressBar = styled(Box)<ProgressBarProps>(
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
