import { Box, FlexProps, Flex } from '@pearlydrive/core-ui';
import { memo } from 'react';

import type { HollowButtonProps } from './HollowButton.props';

import { Text, TextProps } from '../Text';
import styled from '@emotion/styled';

const GradientOuterBox = styled(Flex)<FlexProps>(({ theme }) => {
  const indent = '1px';
  const gradient = `linear-gradient(to right, #A12AFF, #DB00FF)`;
  return ({
    position: 'relative',
    backgroundClip: 'padding-box',
    padding: `8px`,
    borderImageSlice: '1',
    borderRadius: '9px',
    background: gradient,
    ":after": {
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
      opacity: '1'
    }
  })
})

// TODO: implement real hollow effect
const HollowBox = styled(Flex)<FlexProps>(({ theme }) => {
  return ({
    background: "#240035",
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: '50px',
    boxSizing: 'border-box'
  })
})

const ButtonText = styled(Text)<TextProps>(({ theme }) => {
  return ({
    color: theme.colors.primary.white
  })
})

export const HollowButton = memo<HollowButtonProps>(
  ({ title, capital = true, background, ...props }) => {

    return (
      <Box
        padding={'5px'}>
        <GradientOuterBox
          width={props.width ?? '250px'}
          height={props.height ?? '80px'}
          // minWidth={'250px'}
          // minHeight={'80px'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          {...props}>
          <HollowBox>
            <ButtonText
              size='xl'
              fontWeight={'700'}
            >
              {capital ? title.toUpperCase() : title}
            </ButtonText>
          </HollowBox>
        </GradientOuterBox>
      </Box>
    );
  }
);