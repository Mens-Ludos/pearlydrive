import { Box } from '@pearlydrive/core-ui';
import React from 'react';

import { Card as CardC, CollapseCard, Text } from '../lib';

export default {
    title: 'Landing UI/Components/CollapseCard',
    component: CardC,
};

export const CardWhite: React.FC = () => (
    <Box background={'white'} padding={'40px'}>

        <CollapseCard
            title='In ut congue tellus, accumsan pulvinar massa?'>
            <Text fontSize='26px' lineHeight={'30px'}>
                Aenean tincidunt purus vel nisl finibus tristique.
                Maecenas velit nulla, fermentum ut accumsan eget, euismod id velit.
                Duis congue mauris tempor aliquam vulputate.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                Quisque non metus mollis, molestie enim non, faucibus arcu.
            </Text>
        </CollapseCard >
    </Box>

);
