import { Box, Flex } from "@pearlydrive/core-ui";
import { icon, Text } from "@pearlydrive/landing-ui";

// import { ReactComponent as TwitterIcon } from '../../public/icons/twitter.svg';
// import { ReactComponent as DiscordIcon } from './assets/socials/discord.svg';
// import { ReactComponent as TelegramIcon } from './assets/socials/telegram.svg';

import React from "react";

// const Template = (args) => {
//     const Twitter = icon(TwitterIcon);
//     return <Twitter {...args} />;
// };

// const Twitter = Template.bind({});


// const DiscordIconComponent = icon(TwitterIcon);
// const TelegramIconComponent = icon(TwitterIcon);

export const Footer: React.FC = () => {
    return (
        <Box
            height='163px'
            paddingX='150px'
            paddingY='55px'
            background='linear-gradient(269.71deg, rgba(55, 0, 57, 0.15) 0%, rgba(55, 0, 57, 0) 91.99%), 
                        radial-gradient(33.75% 399.55% at 81.77% -288.34%, rgba(174, 15, 180, 0.8) 0%, rgba(174, 15, 180, 0) 100%)'
            style={{
                boxSizing: 'border-box',
            }}
        >
            <Flex justifyContent='space-between' flexDirection='row' alignItems='center'>
                <Box background='grey' width='50px' height='50px'></Box>
                <Flex width='200px' justifyContent='space-between' alignItems='center' flexDirection='row'>
                    {/* todo: replace with icons */}
                    <Box background='grey' width='24px' height='24px'></Box>
                    <Box background='grey' width='24px' height='24px'></Box>
                    <Box background='grey' width='24px' height='24px'></Box>
                    <Box background='grey' width='24px' height='24px'></Box>
                    {/* <TwitterIcon></TwitterIcon> */}
                    {/*<DiscordIconComponent></DiscordIconComponent>
                    <TelegramIconComponent></TelegramIconComponent> */}
                </Flex>
                <Flex height='100%' width='216px' flexDirection='column' alignContent='space-between'>
                    <Text fontFamily='Montserrat' fontWeight='700' fontSize='20px' color="primary.purple">Need help?</Text>
                    <Flex flexDirection='row' justifyContent='space-between'>
                        <Text fontFamily='Inter' fontWeight='700' fontSize='20px' color="white">FAQ's</Text>
                        <Text fontFamily='Inter' fontWeight='700' fontSize='20px' color="white">Contact Us</Text>
                    </Flex>
                </Flex>
                <Flex height='100%' width='500px' flexDirection='column' alignContent='space-between'>
                    <Text fontFamily='Montserrat' fontWeight='700' fontSize='20px' color="primary.purple">General</Text>
                    <Flex flexDirection='row' justifyContent='space-between'>
                        <Text fontFamily='Inter' fontWeight='700' fontSize='20px' color="white">IDO</Text>
                        <Text fontFamily='Inter' fontWeight='700' fontSize='20px' color="white">Roadmap</Text>
                        <Text fontFamily='Inter' fontWeight='700' fontSize='20px' color="white">Economic</Text>
                        <Text fontFamily='Inter' fontWeight='700' fontSize='20px' color="white">Advantages</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}