import React from 'react';

import { HollowButton } from '../lib';

export default {
  title: 'Landing UI/Components/HollowButton',
  component: HollowButton,
};

export const ButtonDefault: React.FC = () => (
  <HollowButton title="Text"></HollowButton>
);

export const ButtonCapitalDisabled: React.FC = () => (
  <HollowButton title="Text" capital={false}></HollowButton>
);

export const CustomSizes: React.FC = () => (
  <HollowButton
    title="Drive on"
    width={'300px'}
    height={'200px '}
  ></HollowButton>
);

export const OnClickCallback: React.FC = () => (
  <HollowButton
    title="Drive on"
    onClick={() => {
      alert('Button onClick!');
    }}
  ></HollowButton>
);
