import { Flex } from '@pearlydrive/core-ui';
import React from 'react';

import { FeatureCard, Text } from '../lib';

export default {
  title: 'Landing UI/Components/Feature Card',
  component: FeatureCard,
};

export const Left: React.FC = () => (
  <FeatureCard title="Uno" subTitle="Extended">
    <Flex flexDirection="column" gap="40px">
      <Text
        lineHeight="28px"
        fontFamily="Raleway"
        fontWeight={500}
        color="primary.black"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nulla
        molestie, porttitor lacus eu, fringilla diam.{' '}
        <Text fontFamily="Raleway" fontWeight={700} color="primary.black">
          Mauris
        </Text>{' '}
        lorem enim, fringilla in mauris a, efficitur ultricies ligula. Phasellus
        fringilla fringilla cursus.
      </Text>
      <Text
        lineHeight="28px"
        fontFamily="Raleway"
        fontWeight={500}
        color="primary.black"
      >
        Morbi vestibulum dictum nunc vitae porttitor. Nulla facilisi. Donec
        rutrum massa ac vulputate congue.
      </Text>
    </Flex>
  </FeatureCard>
);

export const Right: React.FC = () => (
  <FeatureCard title="Dos" subTitle="Extended" align="right">
    <Flex flexDirection="column" gap="40px" maxWidth="872px">
      <Text
        lineHeight="28px"
        fontFamily="Raleway"
        fontWeight={500}
        color="primary.black"
      >
        Integer aliquam, nunc sit amet maximus lacinia, mauris nunc pellentesque
        libero, nec pellentesque arcu nibh ac nibh. Phasellus euismod feugiat
        mauris. Ac placerat urna ultrices non. Duis accumsan semper sem in
        sodales.
      </Text>
      <Text
        lineHeight="28px"
        fontFamily="Raleway"
        fontWeight={500}
        color="primary.black"
      >
        Sed sagittis nisi aliquam{' '}
        <Text
          lineHeight="28px"
          fontFamily="Raleway"
          fontWeight={700}
          color="primary.black"
        >
          NFT
        </Text>{' '}
        risus finibus hendrerit ut sagittis{' '}
        <Text
          lineHeight="28px"
          fontFamily="Raleway"
          fontWeight={700}
          color="primary.black"
        >
          augue
        </Text>
        .
      </Text>
    </Flex>
  </FeatureCard>
);
