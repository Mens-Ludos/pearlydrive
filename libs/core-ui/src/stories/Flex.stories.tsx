import React from 'react';

import { Flex as FlexComponent } from '../lib';

export default {
  title: 'Core UI/Components/Layout',
  component: FlexComponent,
};

export const Flex: React.FC = () => (
  <div>
    <FlexComponent justifyContent="space-between" mt="40px">
      <span>Left</span>
      <span>right</span>
    </FlexComponent>
    <FlexComponent justifyContent="center" mt="8px">
      <span>center</span>
    </FlexComponent>
  </div>
);
