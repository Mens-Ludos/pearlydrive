import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ReactComponent as TwitterIcon } from './assets/socials/twitter.svg';

import type { SVGComponent } from '../lib';
import { icon } from '../lib';

export default {
  title: 'Landing UI/Components/Icon',
  component: icon(TwitterIcon),
} as ComponentMeta<SVGComponent>;

const Template: ComponentStory<SVGComponent> = (args) => {
  const Twitter = icon(TwitterIcon);
  return <Twitter {...args} />;
};

export const Twitter = Template.bind({});
