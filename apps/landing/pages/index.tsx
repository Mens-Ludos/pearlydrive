import { Box } from '@pearlydrive/core-ui';
import { Text } from '@pearlydrive/landing-ui';
import type { NextPage } from 'next';
import { Footer } from '../components';
import { DriveOnSection } from '../components/DriveOnSection';

const Home: NextPage = () => {
  return (
    <Box background='#120021' style={{
      maxWidth: '1920px',
      margin: 'auto'
    }}>
      <Box>
        <Box background='white' width='100%'>
          <Box>
            <DriveOnSection></DriveOnSection>
          </Box>
        </Box>
      </Box>
      <Footer></Footer>
    </Box>
  );
};

export default Home;
