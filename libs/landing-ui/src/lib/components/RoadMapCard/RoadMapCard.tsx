import { Box, Flex } from '@pearlydrive/core-ui';
import { memo } from 'react';

import { RoadMapCardProps } from './RoadMapCard.props';

import { Card } from '../Card';
import { Text } from '../Text';

export const RoadMapCard = memo<RoadMapCardProps>(
  ({ title, subTitle, children, ...props }) => {
    return (
      <Card
        appearance="white"
        paddingY={'70px'}
        paddingX={'65px'}
        borderRadius="38px"
        style={{
          background: 'rgba(255, 255, 255, 0.2)',
        }}
        minHeight={'436px'}
        {...props}
      >
        <Flex flexDirection="column">
          <Flex gap="30px" alignItems="baseline" mb="63px">
            <Text
              fontFamily="Ubuntu"
              fontWeight={700}
              size="xl"
              color="primary.black"
            >
              {title}
            </Text>
            <Text fontFamily="Ubuntu" fontWeight={700} color="primary.purple">
              {subTitle}
            </Text>
          </Flex>
          <Box>{children}</Box>
        </Flex>
      </Card>
    );
  },
);
