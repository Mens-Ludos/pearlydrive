import { Box } from '@pearlydrive/core-ui';
import { LandingThemeProvider } from '@pearlydrive/landing-ui';
import type { NextPage } from 'next';

import { Footer, DriveOnSection } from '../components';
import { FaqSection } from '../components/FaqSection';

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
          <Box background="white" width="100%">
            <FaqSection />
            <Box>
              <DriveOnSection></DriveOnSection>
            </Box>
          </Box>
        </Box>
        <Footer></Footer>
      </Box>
    </LandingThemeProvider>
  );
};

export default Home;
