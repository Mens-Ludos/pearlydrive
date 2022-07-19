import { Flex } from '@pearlydrive/core-ui';
import type { FC } from 'react';

import type { SupplyItemProps } from './SupplyCard.props';

import { ProgressBar } from '../ProgressBar';
import { Text } from '../Text';

export const SupplyCardItem: FC<SupplyItemProps> = ({
  name,
  percents,
  value,
  max,
  ...props
}) => {
  return (
    <Flex flexDirection="column" {...props}>
      <Text
        fontFamily="Montserrat"
        fontWeight={700}
        fontSize="24px"
        lineHeight="29px"
        color="primary.white"
      >
        {name}
      </Text>
      <Flex
        mt="15px"
        alignItems="center"
        width="100%"
        justifyContent="space-between"
      >
        <ProgressBar value={value} max={max} />
        <Text
          width="200px"
          fontFamily="Inter"
          fontWeight={700}
          fontSize="24px"
          lineHeight="29px"
          textAlign="right"
          color="primary.white"
        >
          {percents.toFixed(0)}%
        </Text>
      </Flex>
    </Flex>
  );
};
