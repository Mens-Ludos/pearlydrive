import React from 'react';

import { Box as BoxComponent } from '../lib';

export default {
  title: 'Core UI/Components/Layout',
  component: BoxComponent,
};

export const Box: React.FC = () => (
  <div>
    <BoxComponent as="p">
      Contains background, border, layout, position, and space from{' '}
      <a href="https://styled-system.com/api" target="_blank" rel="noreferrer">
        Styled System&lsquo;s API
      </a>
    </BoxComponent>
  </div>
);
