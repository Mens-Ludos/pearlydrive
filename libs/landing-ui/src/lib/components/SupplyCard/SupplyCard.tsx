import type { FC } from 'react';

import type { SupplyCardProps } from './SupplyCard.props';
import { SupplyCardItem } from './SupplyCardItem';
import { SupplyCardWrapper } from './SupplyCardWrapper';

export const SupplyCard: FC<SupplyCardProps> = ({ items, ...props }) => {
  return (
    <SupplyCardWrapper {...props}>
      {items.map(({ name, percents, value, max }) => (
        <SupplyCardItem
          key={name}
          name={name}
          percents={percents}
          value={value}
          max={max}
        />
      ))}
    </SupplyCardWrapper>
  );
};
