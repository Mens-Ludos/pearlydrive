import React from 'react';

import FounderIcon from './assets/founder1.png';

import { PersonCard } from '../lib';

export default {
  title: 'Landing UI/Components/Person Card',
  component: PersonCard,
};

export const Founder: React.FC = () => (
  <PersonCard
    appearance="founder"
    name="Nickname"
    tag="founder"
    imageSrc={FounderIcon}
  >
    Links
  </PersonCard>
);
