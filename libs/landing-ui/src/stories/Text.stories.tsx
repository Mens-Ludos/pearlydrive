import React from 'react';

import {
  LargeText,
  MediumText,
  SmallText,
  Text as TextComponent,
} from '../lib';

export default {
  title: 'Landing UI/Components',
  component: TextComponent,
};

export const Text: React.FC = () => (
  <div>
    <TextComponent>Default</TextComponent>
    <TextComponent bold>Bold text</TextComponent>
    <SmallText>Small text</SmallText>
    <MediumText>Medium text</MediumText>
    <LargeText>Large text</LargeText>
    <TextComponent fontSize="24px">Custom fontsize</TextComponent>
    <TextComponent color="red">Custom color</TextComponent>
    <TextComponent color="purple">Custom color from theme</TextComponent>
    <TextComponent color="purple" textTransform="uppercase">
      with text transform
    </TextComponent>
    <TextComponent textAlign="center">center</TextComponent>
    <TextComponent
      display="inline"
      color="textSubtle"
      textTransform="uppercase"
    >
      Example of{' '}
    </TextComponent>
    <TextComponent display="inline" bold textTransform="uppercase">
      inline{' '}
    </TextComponent>
    <TextComponent
      display="inline"
      color="textSubtle"
      textTransform="uppercase"
    >
      Text
    </TextComponent>
    <TextComponent ellipsis width="250px">
      Ellipsis: a long text with an ellipsis just for the example
    </TextComponent>
  </div>
);
