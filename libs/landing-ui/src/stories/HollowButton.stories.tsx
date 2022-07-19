import React from 'react';

import { HollowButton } from '../lib';

export default {
  title: 'Landing UI/Components/HollowButton',
  component: HollowButton,
};

export const ButtonDefault: React.FC = () => <HollowButton>Text</HollowButton>;

export const ButtonCapitalDisabled: React.FC = () => (
  <HollowButton uppercase={false}>Text</HollowButton>
);

export const CustomSizes: React.FC = () => (
  <HollowButton width={'300px'} height={'200px '}>
    Drive on
  </HollowButton>
);

export const OnClickCallback: React.FC = () => (
  <HollowButton
    onClick={() => {
      alert('Button onClick!');
    }}
  >
    Drive on
  </HollowButton>
);
