import { Box, Flex } from '@pearlydrive/core-ui';
import React from 'react';

import { RoadMapCard, Text } from '../lib';

export default {
  title: 'Landing UI/Components/RoadMap Card',
  component: RoadMapCard,
};

export const EmptyCard: React.FC = () => {
  return (
    <Box background={'white'} p="50px">
      <RoadMapCard title="Title" subTitle="subtitle"></RoadMapCard>
    </Box>
  );
};

export const CardWithContent: React.FC = () => {
  return (
    <Box background={'white'} p="50px">
      <RoadMapCard title="Title" subTitle="subtitle">
        <Text fontFamily={'Noto Sans'} lineHeight={'32px'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut
          pretium augue. Integer ut pulvinar ex, nec ultrices lacus. Phasellus
          condimentum magna sed felis elementum, a sodales sem bibendum. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </Text>
      </RoadMapCard>
    </Box>
  );
};
