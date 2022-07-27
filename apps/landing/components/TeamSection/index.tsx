import { Box, Flex } from '@pearlydrive/core-ui';
import { Card, PersonCard, Text } from '@pearlydrive/landing-ui';

export const TeamSection: React.FC = () => {
  return (
    <Box p="25px">
      <Card borderRadius="98px" overflow="hidden" background="#120021">
        <Box
          width="100%"
          height="100%"
          p="100px"
          background="linear-gradient(0deg, rgba(174, 15, 180, 0.34) 0%, rgba(174, 15, 180, 0) 58.98%)"
          style={{
            boxSizing: 'border-box',
          }}
        >
          <Flex flexDirection="row" alignContent="space-between">
            <Flex flexWrap="wrap" flex="4" gap="100px">
              <PersonCard
                appearance="founder"
                name="Nickname"
                tag="founder"
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo4zGSr25cTfr__JnNBlxju18g9geM7uir_g&usqp=CAU"
              >
                Links
              </PersonCard>
              <PersonCard
                appearance="founder"
                name="Nickname"
                tag="founder"
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo4zGSr25cTfr__JnNBlxju18g9geM7uir_g&usqp=CAU"
              >
                Links
              </PersonCard>
              <PersonCard
                appearance="founder"
                name="Nickname"
                tag="founder"
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo4zGSr25cTfr__JnNBlxju18g9geM7uir_g&usqp=CAU"
              >
                Links
              </PersonCard>
              <PersonCard
                appearance="founder"
                name="Nickname"
                tag="founder"
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo4zGSr25cTfr__JnNBlxju18g9geM7uir_g&usqp=CAU"
              >
                Links
              </PersonCard>
            </Flex>
            <Flex
              flex="2"
              height="100%"
              width="100%"
              flexDirection="column"
              alignItems="center"
            >
              <Text
                fontFamily="Montserrat"
                fontWeight="800"
                size="xxxl"
                color="primary.white"
                pb="72px"
              >
                Our Team
              </Text>
              <Box>
                <Text
                  fontFamily="Raleway"
                  lineHeight="27px"
                  color="primary.white"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc non massa et Founder auctor mollis nit Co-Founder.
                  </p>

                  <p>
                    Nam vel magna purus. Fusce facilisis sapien vitae erat
                    ultricies dignissim. Donec aliquam augue vel Community
                    Manager efficitur tincidunt. Nullam malesuada tellus nec
                    ipsum posuere, nec viverra urna interdum.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin sed mollis nisi. Nunc pellentesque, lorem eu
                    Developers sagittis, dolor eros consequat leo, eu bibendum
                    dui lectus in libero. Nam vel magna purus.
                  </p>

                  <p>
                    Fusce facilisis sapien vitae erat ultricies dignissim. Donec
                    Designer augue vel ligula efficitur tincidunt. Nullam
                    malesuada tellus nec ipsum posuere, nec viverra urna
                    interdum.
                  </p>
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Card>
    </Box>
  );
};
