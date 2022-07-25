import { Box, Flex } from '@pearlydrive/core-ui';
import { Card, HollowButton, Text } from '@pearlydrive/landing-ui';

import TowerSvg from '../../public/tower.svg';

export const DriveOnSection: React.FC = () => {
  return (
    <Box py="65px" px="62px">
      <Card
        height="433px"
        borderRadius="76px"
        overflow="hidden"
        background="#120021"
      >
        <Box
          width="100%"
          height="100%"
          background="linear-gradient(72.47deg, rgba(174, 15, 180, 0.53) -31.35%, rgba(174, 15, 180, 0) 43.88%),
                                linear-gradient(262.43deg, rgba(174, 15, 180, 0.53) -20.7%, rgba(174, 15, 180, 0) 44.57%),
                                #120021"
        >
          <Flex px="100px" height="100%" alignItems="center">
            <Flex
              flexBasis="33%"
              height="100%"
              py="106px"
              flexDirection="column"
              justifyContent="space-between"
              style={{ boxSizing: 'border-box' }}
            >
              <Flex flexDirection="column">
                <Text
                  style={{ height: '77px' }}
                  fontFamily="Ubuntu"
                  size="xxl"
                  fontWeight="700"
                  color="primary.white"
                >
                  Big Title
                </Text>
                <Text
                  fontFamily="Ubuntu"
                  size="lg"
                  fontWeight="700"
                  color="primary.purple"
                >
                  Join big community
                </Text>
              </Flex>
              <Text fontFamily="Inter" color="primary.white" lineHeight="29px">
                Become a part of the biggest crypto <br />
                project ever created and start to earn!
              </Text>
            </Flex>
            <Flex
              flexBasis="33%"
              height="100%"
              justifyContent="center"
              alignItems="center"
            >
              <HollowButton
                onClick={() => {
                  console.log('DRIVE ON!');
                }}
              >
                Drive on
              </HollowButton>
            </Flex>
            <Flex flexBasis="33%" height="100%" justifyContent="flex-end">
              <TowerSvg
                style={{
                  marginRight: '-45px',
                  marginTop: '90px',
                }}
              />
            </Flex>
          </Flex>
        </Box>
      </Card>
    </Box>
  );
};
