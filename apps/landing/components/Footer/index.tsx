import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Box, Flex, useMatchBreakpoints } from '@pearlydrive/core-ui';
import { icon, Text } from '@pearlydrive/landing-ui';
import React from 'react';

import DiscordIcon from '../../public/icons/discord.svg';
import PancakeIcon from '../../public/icons/pancake.svg';
import TelegramIcon from '../../public/icons/telegram.svg';
import TwitterIcon from '../../public/icons/twitter.svg';

const Twitter = icon(TwitterIcon);
const Discord = icon(DiscordIcon);
const Telegram = icon(TelegramIcon);
const Pancake = icon(PancakeIcon);

const LinkText = styled(Text)(({ theme }) => ({
  cursor: 'pointer',
  fontSize: "20px",
  fontFamily: "Inter",
  fontWeight: "700",
  color: "white",
  [theme.mediaQueries.lg]: {
    fontSize: "32px"
  }
}));

const HeaderText = styled(Text)(({ theme }) => ({
  userSelect: 'none',
  fontSize: "20px",
  fontFamily: "Montserrat",
  fontWeight: "700",
  color: theme.colors.primary.purple,
  [theme.mediaQueries.lg]: {
    fontSize: "36px"
  }
}));


const MobileCopyrightText = styled(Text)(({ theme }) => ({
  cursor: 'pointer',
  fontSize: "15px",
  fontFamily: "Inter",
  fontWeight: "700",
  lineHeight: '19.36px',
  color: theme.colors.primary.gray,
}));


const AppLogo: React.FC<{
  size: number
}> = ({ size }) => {
  return (
    <Box background="grey" width={`${size}px`} height={`${size}px`}></Box>
  );
}

const IconsSection: React.FC<{

}> = () => {
  return (
    <Flex
      width="200px"
      height="24px"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
    >
      <Twitter />
      <Discord />
      <Telegram />
      <Pancake />
    </Flex>
  )
}

export const Footer: React.FC = () => {
  const { mediaQueries } = useTheme();
  const { isMobile, isTablet, isDesktop } = useMatchBreakpoints()

  const mobileMedia = mediaQueries.lg;
  const mobileGap = '20px'

  return (
    <Box
      paddingX="150px"
      paddingY="55px"
      background="linear-gradient(269.71deg, rgba(55, 0, 57, 0.15) 0%, rgba(55, 0, 57, 0) 91.99%), 
                        radial-gradient(33.75% 399.55% at 81.77% -288.34%, rgba(174, 15, 180, 0.8) 0%, rgba(174, 15, 180, 0) 100%)"
      style={{
        boxSizing: 'border-box',
      }}
      css={css({
        [mediaQueries.xxl]: {
          paddingLeft: "50px",
          paddingRight: "50px",
        },
        [mediaQueries.xl]: {
          paddingLeft: "10px",
          paddingRight: "10px",
        },
        [mobileMedia]: {
          padding: "50px"
        },
      })}
    >
      <Flex
        justifyContent="space-between"
        flexDirection="row"
        alignItems="center"
        gap='35px'

        css={css({
          [mediaQueries.sm]: {
            gap: '0px',
            flexDirection: "column"
          }
        })}
      >
        {/* todo: replace with logo */}
        {isDesktop && <AppLogo size={50} />}

        {isDesktop && <IconsSection />}

        <Flex
          gap='50px'
          css={css({
            [mobileMedia]: {
              gap: '90px',
              flexWrap: 'wrap'
            }
          })}
        >

          <Flex
            height="100%"
            // width="216px"
            flexDirection="column"
            alignContent="space-between"
            css={css({
              [mobileMedia]: {
                gap: '25px'
              }
            })}

          >
            <HeaderText>
              Need help?
            </HeaderText>
            <Flex
              flexDirection="row"
              justifyContent="space-between"
              gap='35px'

              css={css({
                [mobileMedia]: {
                  flexDirection: "column",
                  gap: mobileGap
                }
              })}>
              <LinkText

              >
                FAQ&#39;s
              </LinkText>
              <LinkText
              >
                Contact Us
              </LinkText>
            </Flex>
          </Flex>
          <Flex
            height="100%"
            // width="500px"
            flexDirection="column"
            alignContent="space-between"
            css={css({
              [mobileMedia]: {
                gap: '25px'
              }
            })}
          >
            <HeaderText>
              General
            </HeaderText>
            <Flex
              flexDirection="row"
              justifyContent="space-between"
              gap='35px'

              css={css({
                [mobileMedia]: {
                  justifyContent: "start",
                  gap: '50px',
                  flexWrap: 'wrap'
                }
              })}
            >
              <Flex
                flexDirection="row"
                justifyContent="space-between"
                gap='35px'

                css={css({
                  [mobileMedia]: {
                    flexDirection: "column",
                    gap: mobileGap
                  }
                })}
              >

                <LinkText
                >
                  IDO
                </LinkText>
                <LinkText
                >
                  Roadmap
                </LinkText>
              </Flex>
              <Flex
                flexDirection="row"
                justifyContent="space-between"
                gap='35px'

                css={css({
                  [mobileMedia]: {
                    flexDirection: "column",
                    gap: mobileGap
                  }
                })}
              >

                <LinkText
                >
                  Economic
                </LinkText>
                <LinkText
                >
                  Advantages
                </LinkText>
              </Flex>
            </Flex>
          </Flex>

          {!isDesktop &&
            <Flex width='100%' mt={`-${mobileGap}`} flexDirection='column' gap='50px'>
              <IconsSection />

              <Flex justifyContent='space-between' alignItems='center'>
                <Flex gap='50px'>
                  <MobileCopyrightText>
                    Copyright
                  </MobileCopyrightText>
                  <Flex gap='20px'>
                    <MobileCopyrightText>
                      All Right Reserved
                    </MobileCopyrightText>
                    <MobileCopyrightText>
                      {new Date().getFullYear()}
                    </MobileCopyrightText>
                  </Flex>
                </Flex>
                <AppLogo size={32} />
              </Flex>
            </Flex>
          }
        </Flex>
      </Flex>
    </Box >
  );
};
