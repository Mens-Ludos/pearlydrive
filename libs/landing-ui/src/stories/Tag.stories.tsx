import React from 'react';

import { Tag } from '../lib';

export default {
  title: 'Landing UI/Components/Tag',
  component: Tag,
};

export const Founder: React.FC = () => (
  <Tag background="#A428FF" height="28px">
    Founder
  </Tag>
);
export const Person: React.FC = () => (
  <Tag
    background="rgba(255, 255, 255, 0.2)"
    height="25px"
    style={{
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
    }}
  >
    UI designer
  </Tag>
);
