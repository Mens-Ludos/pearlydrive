import { css, useTheme } from '@emotion/react';
import { Box, Flex } from '@pearlydrive/core-ui';
import { FeatureCard, SupplyCard, Text } from '@pearlydrive/landing-ui';

export const TokenomicsSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      py="150px"
      background="radial-gradient(61.1% 55.67% at 51.25% 0%, rgba(174, 15, 180, 0.33) 0%, rgba(174, 15, 180, 0) 100%);"
    >
      <Flex
        flexDirection="column"
        alignItems="center"
        style={{ userSelect: 'none' }}
        gap="65px"
      >
        <Flex flexDirection="column" alignItems="center">
          <Text
            color="primary.white"
            fontFamily="Montserrat"
            fontWeight="800"
            size="xxxxl"
            textAlign='center'
          >
            Big Title
          </Text>
          <Text
            color="#A428FF"
            fontFamily="Montserrat"
            fontWeight="600"
            size="xxl"
            mt="-35px"
            textAlign='center'
          >
            Small title
          </Text>
        </Flex>
        <Flex width="100%" flexDirection="column" alignItems="center">
          <Flex pb="15px" height="63px"
            css={css({
              [theme.mediaQueries.md]: {
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: "75px"
              },

            })}>
            <Text
              fontSize="40px"
              fontWeight="700"
              fontFamily="Raleway"
              color="rgba(255, 255, 255, 0.55)"
            >
              Total Supply:
            </Text>
            <Box
              display="inline-block"
              ml="10px"
              position="relative"
              width="245px"
              height="48px"
            >
              <Text
                fontSize="48px"
                fontWeight="700"
                fontFamily="Montserrat"
                style={{
                  background:
                    'linear-gradient(268.8deg, #CE09FF 0%, #A229FF 39.05%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  position: 'absolute',
                }}
              >
                1 000 000
              </Text>
              <Text
                fontSize="48px"
                fontWeight="700"
                fontFamily="Montserrat"
                style={{
                  background:
                    'linear-gradient(268.8deg, #CE09FF 0%, #A229FF 39.05%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  position: 'absolute',
                  filter: 'blur(6px)',
                }}
              >
                1 000 000
              </Text>
            </Box>
          </Flex>
          <SupplyCard
            css={css({
              [theme.mediaQueries.md]: {
                padding: "40px"
              },
              [theme.mediaQueries.sm]: {
                padding: "25px"
              },
            })}
            items={[
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
            ]}
            style={{ boxSizing: 'border-box' }}
            width="100%"
            maxWidth="1282px"
          />
        </Flex>
        {/* TODO: justify items to center when text blocks wraps */}
        <Flex
          width="100%"
          maxWidth="1514px"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-around"
          px='25px'
          css={css({
            [theme.mediaQueries.md]: {
              width: "unset"
            },
          })}
        >
          <Box maxWidth="630px">
            <Text color="primary.white" fontFamily="Roboto" lineHeight="28px">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent ac massa erat. Nunc semper a dolor in rutrum.
              </p>
              <p>
                Etiam vel ipsum at diam aliquet euismod. Pellentesque sed
                feugiat tortor. Proin venenatis turpis nec tellus maximus
                tincidunt.
              </p>
              <p>
                Pellentesque quis sem iaculis, elementum eros quis, aliquam
                magna. Duis metus tellus, aliquet et rutrum a, ullamcorper ut
                neque.
              </p>
            </Text>
          </Box>
          <Box maxWidth="630px">
            <Text color="primary.white" fontFamily="Roboto" lineHeight="28px">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent ac massa erat. Nunc semper a dolor in rutrum.
              </p>
              <p>
                Etiam vel ipsum at diam aliquet euismod. Pellentesque sed
                feugiat tortor. Proin venenatis turpis nec tellus maximus
                tincidunt.
              </p>
              <p>
                Pellentesque quis sem iaculis, elementum eros quis, aliquam
                magna. Duis metus tellus, aliquet et rutrum a, ullamcorper ut
                neque.
              </p>
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
