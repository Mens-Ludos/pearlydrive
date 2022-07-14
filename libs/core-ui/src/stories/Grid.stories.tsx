import React from 'react';

import { Grid as GridComponent, Box } from '../lib';

export default {
  title: 'Core UI/Components/Layout',
  component: GridComponent,
};

export const Grid: React.FC = () => (
  <GridComponent
    justifyItems="center"
    alignContent="center"
    gridTemplateColumns="1fr 1fr"
    gridColumnGap="16px"
    style={{ backgroundColor: '#7645D9' }}
  >
    <Box
      style={{ backgroundColor: '#1fc7d4', width: '300px', height: '300px' }}
    />
    <Box
      style={{ backgroundColor: '#1fc7d4', width: '300px', height: '300px' }}
    />
  </GridComponent>
);
