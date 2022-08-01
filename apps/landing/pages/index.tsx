import styled from '@emotion/styled';
import { Box } from '@pearlydrive/core-ui';
import { LandingThemeProvider } from '@pearlydrive/landing-ui';
import type { NextPage } from 'next';

import { Footer, DriveOnSection } from '../components';
import { FaqSection } from '../components/FaqSection';
import { FeaturesSection } from '../components/FeaturesSection';

const WhiteBox = styled(Box)((theme) => ({
  background: 'white',
  width: '100%',
}));
const Home: NextPage = () => {
  return (
    <LandingThemeProvider>
      <Box
        background="#120021"
        style={{
          maxWidth: '1920px',
          margin: 'auto',
        }}
      >
        <Box>
          <WhiteBox>
            <FeaturesSection></FeaturesSection>
          </WhiteBox>
          <WhiteBox>
            <FaqSection />
            <Box>
              <DriveOnSection></DriveOnSection>
            </Box>
          </WhiteBox>
        </Box>
        <Footer></Footer>
      </Box>
    </LandingThemeProvider>
  );
};

export default Home;
