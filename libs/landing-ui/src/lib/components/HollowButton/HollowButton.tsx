import styled from '@emotion/styled';
import { FlexProps, Flex } from '@pearlydrive/core-ui';
import { memo } from 'react';

import type { HollowButtonProps } from './HollowButton.props';

import { Text } from '../Text';

const GradientOuterBox = styled(Flex)<FlexProps>(({ theme }) => {
  const indent = '1px';
  const gradient = `linear-gradient(to right, #A12AFF, #DB00FF)`;
  return {
    position: 'relative',
    backgroundClip: 'padding-box',
    padding: `8px`,
    borderImageSlice: '1',
    borderRadius: '9px',
    background: gradient,
    userSelect: 'none',
    ':after': {
      transition: 'opacity 0.3s ease-out;',
      opacity: '0',
      position: 'absolute',
      top: `-${indent}`,
      bottom: `-${indent}`,
      left: `-${indent}`,
      right: `-${indent}`,
      background: gradient,
      content: '""',
      zIndex: '-1',
      borderRadius: '9px',
      filter: 'blur(0.25rem)',
    },
    ':hover': {
      cursor: 'pointer',
      ':after': {
        position: 'absolute',
        top: `-${indent}`,
        bottom: `-${indent}`,
        left: `-${indent}`,
        right: `-${indent}`,
        background: gradient,
        content: '""',
        zIndex: '-1',
        borderRadius: '9px',
        filter: 'blur(0.25rem)',
        opacity: '1',
      },
    },
  };
});

const HollowBox = styled(Flex)<FlexProps>(({ theme }) => {
  return {
    background: '#240035',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'inset 0px 0px 10px 2px rgba(0,0,0,0.6)',
    boxSizing: 'border-box',
  };
});

export const HollowButton = memo<HollowButtonProps>(
  ({
    title,
    capital = true,
    width = '266px',
    height = '96px',
    background,
    ...props
  }) => {
    return (
      <button
        style={{
          padding: '5px',
          background: 'none',
          border: '0px',
        }}
      >
        <GradientOuterBox
          width={width}
          height={height}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          {...props}
        >
          <HollowBox>
            <Text
              size="xl"
              fontWeight={'700'}
              color="primary.white"
              textTransform={capital ? 'capitalize' : undefined}
            >
              {title}
            </Text>
          </HollowBox>
        </GradientOuterBox>
      </button>
    );
  },
);
