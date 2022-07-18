import { useTheme } from '@emotion/react';
import { Flex } from '@pearlydrive/core-ui';
import type { FC } from 'react';

import { Image } from './Image';
import type { PersonCardProps } from './PersonCard.props';

import type { CardProps } from '../Card';
import { Tag } from '../Tag';
import { Text } from '../Text';

export const Founder: FC<
  Omit<PersonCardProps, keyof Omit<CardProps, 'children'>>
> = ({ name, tag, imageSrc, children }) => {
  const theme = useTheme();

  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      p="30px 60px 60px 30px"
      height="100%"
      width="100%"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Image src={imageSrc} width="164px" height="164px" />
        <Text
          fontFamily="Roboto"
          fontWeight={500}
          fontSize="36px"
          lineHeight="42px"
          letterSpacing="0.03em"
          color="primary.white"
        >
          {name}
        </Text>
      </Flex>
      <Flex alignItems="center">
        <Flex width="164px" alignItems="center" justifyContent="center">
          <Tag background={theme.colors.primary.purpleLight} height="28px">
            {tag}
          </Tag>
        </Flex>
        <Flex>{children}</Flex>
      </Flex>
    </Flex>
  );
};
