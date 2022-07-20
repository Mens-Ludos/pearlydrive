import { useTheme } from '@emotion/react';
import { Flex } from '@pearlydrive/core-ui';
import type { FC } from 'react';
import React from 'react';

import { Image } from './Image';
import type { PersonCardProps } from './PersonCard.props';

import type { CardProps } from '../Card';
import { Tag } from '../Tag';
import { Text } from '../Text';

export const Person: FC<
  Omit<PersonCardProps, keyof Omit<CardProps, 'children'>>
> = ({ name, tag, imageSrc, children }) => {
  const theme = useTheme();
  return (
    <Flex
      width="100%"
      height="100%"
      p="35px"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex
        flexDirection="column"
        height="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex flexDirection="column" alignItems="center">
          <Tag
            background="rgba(255, 255, 255, 0.2)"
            height="25px"
            fontSize="12px"
            lineHeight="15px"
            style={{
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
          >
            {tag}
          </Tag>
          <Text
            color="primary.white"
            fontFamily="Roboto"
            fontStyle="normal"
            fontWeight={600}
            fontSize="32px"
            lineHeight="38px"
            letterSpacing="0.03em"
          >
            {name}
          </Text>
        </Flex>
        <Flex>{children}</Flex>
      </Flex>
      <Flex alignItems="center" justifyContent="center">
        <Image src={imageSrc} width="110px" height="110px" />
      </Flex>
    </Flex>
  );
};
