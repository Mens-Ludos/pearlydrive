import { Box, Flex } from '@pearlydrive/core-ui';
import { memo } from 'react';

import type { FeatureCardProps } from './FeatureCard.props';

import { Card } from '../Card';
import { Text } from '../Text';

export const FeatureCard = memo<FeatureCardProps>(
  ({ title, subTitle, align = 'left', children, ...props }) => {
    return (
      <Card
        appearance="white"
        p={`110px ${align === 'left' ? '0' : '150px'} 100px ${
          align === 'left' ? '150px' : '0'
        }`}
        background="rgba(255, 255, 255, 0.19)"
        borderRadius="40px"
        style={{
          boxShadow: '0px 0px 96px -30px rgba(0, 0, 0, 0.25)',
        }}
        {...props}
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          flexDirection={align === 'left' ? 'row' : 'row-reverse'}
        >
          <Flex flexDirection="column" maxWidth="920px">
            <Flex gap="100px" alignItems="baseline" mb="85px">
              <Text
                fontFamily="Montserrat"
                fontWeight={800}
                size="lg"
                color="primary.black"
              >
                {title}
              </Text>
              <Text
                fontFamily="Montserrat"
                fontWeight={800}
                color="primary.purple"
              >
                {subTitle}
              </Text>
            </Flex>
            <Box>{children}</Box>
          </Flex>
          <Flex
            alignItems="center"
            justifyContent={`${align === 'left' ? 'flex-end' : 'flex-start'}`}
            width="500px"
          >
            <Text>Image</Text>
          </Flex>
        </Flex>
      </Card>
    );
  },
);
