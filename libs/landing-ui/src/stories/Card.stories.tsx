import React from 'react';

import { Card as CardC } from '../lib';

export default {
  title: 'Landing UI/Components/Card',
  component: CardC,
};

export const CardWhite: React.FC = () => <CardC height={200}>White</CardC>;
export const CardPurple: React.FC = () => (
  <CardC appearance="purple" height={200}>
    Purple
  </CardC>
);
export const CardGhost: React.FC = () => (
  <CardC appearance="ghost" height={200}>
    Ghost
  </CardC>
);
export const CardCustom: React.FC = () => (
  <CardC background="#120021" borderRadius="76px !important" height={200}>
    Custom
  </CardC>
);
