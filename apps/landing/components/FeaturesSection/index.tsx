import { Box, Flex } from '@pearlydrive/core-ui';
import { FeatureCard, Text } from '@pearlydrive/landing-ui';

export const FeaturesSection: React.FC = () => {
  const cardMarginY = '150px';
  return (
    <Box pt="150px" px="150px" pb="50px">
      <Flex flexDirection="column" style={{ userSelect: 'none' }}>
        <Text
          color="primary.purple"
          fontFamily="Montserrat"
          fontWeight="800"
          size="xxl"
        >
          Big Title
        </Text>
        <Text
          color="primary.black"
          fontFamily="Montserrat"
          fontWeight="600"
          size="xl"
          mt="-18px"
        >
          Small title
        </Text>
      </Flex>
      <Box>
        <FeatureCard my={cardMarginY} title="Uno" subTitle="Extended">
          <Text lineHeight="28px" fontFamily="Raleway" fontWeight="400">
            <p>
              Integer aliquam, nunc sit amet maximus lacinia, mauris nunc
              pellentesque libero, nec pellentesque arcu nibh ac nibh. Phasellus
              euismod feugiat mauris. Ac placerat urna ultrices non. Duis
              accumsan semper sem in sodales.
            </p>

            <p>
              Sed sagittis nisi aliquam NFT risus finibus hendrerit ut sagittis
              augue.
            </p>
          </Text>
        </FeatureCard>
        <FeatureCard
          my={cardMarginY}
          title="Dos"
          subTitle="Extended"
          align="right"
        >
          <Text lineHeight="28px" fontFamily="Raleway" fontWeight="400">
            <p>
              Integer aliquam, nunc sit amet maximus lacinia, mauris nunc
              pellentesque libero, nec pellentesque arcu nibh ac nibh. Phasellus
              euismod feugiat mauris. Ac placerat urna ultrices non. Duis
              accumsan semper sem in sodales.
            </p>

            <p>
              Sed sagittis nisi aliquam NFT risus finibus hendrerit ut sagittis
              augue.
            </p>
          </Text>
        </FeatureCard>
        <FeatureCard my={cardMarginY} title="Tres" subTitle="Extended">
          <Text lineHeight="28px" fontFamily="Raleway" fontWeight="400">
            <p>
              Integer aliquam, nunc sit amet maximus lacinia, mauris nunc
              pellentesque libero, nec pellentesque arcu nibh ac nibh. Phasellus
              euismod feugiat mauris. Ac placerat urna ultrices non. Duis
              accumsan semper sem in sodales.
            </p>

            <p>
              Sed sagittis nisi aliquam NFT risus finibus hendrerit ut sagittis
              augue.
            </p>
          </Text>
        </FeatureCard>
      </Box>
    </Box>
  );
};
