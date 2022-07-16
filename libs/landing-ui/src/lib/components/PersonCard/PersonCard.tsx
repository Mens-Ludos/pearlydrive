import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Flex } from '@pearlydrive/core-ui';
import { FC, useMemo } from 'react';

import type { PersonCardProps } from './PersonCard.props';

import { Card, CardAppearance, CardProps } from '../Card';
import { Tag } from '../Tag';
import { Text } from '../Text';

const Image = styled.img({
  borderRadius: '50%',
});

const Founder: FC<Omit<PersonCardProps, keyof Omit<CardProps, 'children'>>> = ({
  name,
  tag,
  imageSrc,
  children,
}) => {
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

export const PersonCard: FC<PersonCardProps> = ({
  name,
  tag,
  imageSrc,
  appearance = 'founder',
  children,
  width = '454px',
  height = '320px',
  ...props
}) => {
  const cardAppearance = useMemo<CardAppearance>(() => {
    if (appearance === 'founder') {
      return 'ghost';
    } else if (appearance === 'person') {
      return 'purple';
    } else {
      return 'purple';
    }
  }, [appearance]);

  const cardBorderRadius = useMemo<string>(() => {
    if (appearance === 'founder') {
      return '65px !important';
    } else if (appearance === 'person') {
      return '33px !important';
    } else {
      return '33px !important';
    }
  }, [appearance]);

  return (
    <Card
      appearance={cardAppearance}
      borderRadius={cardBorderRadius}
      width={width}
      height={height}
      {...props}
    >
      {appearance === 'founder' ? (
        <Founder name={name} tag={tag} imageSrc={imageSrc}>
          {children}
        </Founder>
      ) : null}
    </Card>
  );
};
