import { Box } from '@pearlydrive/core-ui';
import React from 'react';

import { ProgressBar } from '../lib';

export default {
  title: 'Landing UI/Components/Progress Bar',
  component: ProgressBar,
};

export const Default: React.FC = () => (
  <Box>
    <ProgressBar mb={5} max={0} value={20} />
    <ProgressBar mb={5} max={100} value={80} />
    <ProgressBar mb={5} max={100} value={100} />
    <ProgressBar value={50} max={100} />
  </Box>
);
