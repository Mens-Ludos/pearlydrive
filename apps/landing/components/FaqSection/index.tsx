import { Box, Flex } from '@pearlydrive/core-ui';
import { CollapseCard, Text } from '@pearlydrive/landing-ui';

export const FaqSection: React.FC = () => {
  const cardMarginBottom = '65px';
  return (
    <Box pt="146px" px="150px" pb="20px">
      <Flex flexDirection="column" pb="100px" style={{ userSelect: 'none' }}>
        <Text
          color="primary.purple"
          fontFamily="Ubuntu"
          fontWeight="700"
          size="lg"
        >
          Have any questions?
        </Text>
        <Text
          color="primary.black"
          fontFamily="Ubuntu"
          fontWeight="700"
          size="xxxxl"
          mt="-30px"
        >
          FAQ`s
        </Text>
      </Flex>
      <Box>
        <CollapseCard
          mb={cardMarginBottom}
          title="In ut congue tellus, accumsan pulvinar massa?"
        ></CollapseCard>
        <CollapseCard
          mb={cardMarginBottom}
          title="Aliquam iaculis urna nec vestibulum efficitur?"
        ></CollapseCard>
        <CollapseCard
          mb={cardMarginBottom}
          title="Fusce convallis dapibus ante, at finibus lorem tempor id?"
        ></CollapseCard>
        <CollapseCard
          mb={cardMarginBottom}
          title="In ut congue tellus, accumsan pulvinar massa?"
        ></CollapseCard>
      </Box>
    </Box>
  );
};