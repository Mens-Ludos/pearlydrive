import React, { useMemo } from 'react';

import type { SupplyItemProps } from '../lib';
import { SupplyCard } from '../lib';

export default {
  title: 'Landing UI/Components/Supply Card',
  component: SupplyCard,
};

export const Default: React.FC = () => {
  const items = useMemo<SupplyItemProps[]>(
    () => [
      {
        name: 'Mission Rewards',
        percents: 80,
        value: 80,
      },
      {
        name: 'Staking Rewards',
        percents: 30,
        value: 30,
      },
      {
        name: 'Initial Liquidity',
        percents: 20,
        value: 20,
      },
      {
        name: 'Community Events',
        percents: 40,
        value: 40,
      },
      {
        name: 'For IDO Sale',
        percents: 10,
        value: 10,
      },
    ],
    [],
  );

  return <SupplyCard items={items} />;
};
