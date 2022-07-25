import { Box, Flex } from '@pearlydrive/core-ui';
import { memo, useState } from 'react';

import { CollapseCardProps } from './Collapsecard.props';

import { Card } from '../Card';
import { Text } from '../Text';

export const CollapseCard = memo<CollapseCardProps>(
  ({ title, children, ...props }) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const animationTime = '300ms';
    const padding = '65px';

    const crossWidth = '24px';
    const crossHeight = '7px';

    const borderRadius = '25px';

    return (
      <Box {...props}>
        <Card
          borderRadius={borderRadius}
          borderBottomLeftRadius={isOpened ? '0px' : undefined}
          borderBottomRightRadius={isOpened ? '0px' : undefined}
          appearance="white"
          position="relative"
          zIndex="1"
          paddingX={padding}
          paddingY="34px"
          onClick={() => {
            setIsOpened(!isOpened);
          }}
          style={{
            background: 'white !important',
            userSelect: 'none',
            transition: `border-radius ${animationTime} ease-in-out`,
          }}

        >
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontSize="32px" fontWeight="700">
              {title}
            </Text>
            <Box
              width={crossWidth}
              height={crossWidth}
              position="relative"
              marginLeft={padding}
            >
              <Box
                width={crossWidth}
                height={crossHeight}
                background="black"
                style={{
                  opacity: isOpened ? '0' : '1',
                  transition: `opacity ${animationTime} ease-in-out`,
                  textAlign: 'center',
                }}
                margin="auto"
                left="0"
                right="0"
                top="0"
                bottom="0"
                position="absolute"
              ></Box>
              <Box
                width={crossWidth}
                height={crossHeight}
                background="black"
                style={{
                  transform: `rotate(${isOpened ? '0deg' : '90deg'})`,
                  transformOrigin: 'center',
                  transition: `transform ${animationTime} ease-in-out`,
                  textAlign: 'center',
                }}
                margin="auto"
                left="0"
                right="0"
                top="0"
                bottom="0"
                position="absolute"
              ></Box>
            </Box>
          </Flex>
        </Card>
        <Card
          borderRadius={borderRadius}
          borderTopLeftRadius="0px"
          borderTopRightRadius="0px"
          paddingY={isOpened ? padding : '0'}
          paddingX={padding}
          minHeight={isOpened ? '342px' : '0'}
          height={isOpened ? undefined : '0'}
          overflow="hidden"
          appearance="white"
          style={{
            transition: `
                                display ${animationTime}, 
                                min-height ${animationTime}, 
                                padding ${animationTime}, 
                                height ${animationTime}
                                ease-in-out`,
          }}
        >
          <Box>{children}</Box>
        </Card>
      </Box>
    );
  },
);
