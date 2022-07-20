import { Box } from '@pearlydrive/core-ui';
import { Text } from '@pearlydrive/landing-ui';
import type { NextPage } from 'next';
import { Footer } from '../components';

const Home: NextPage = () => {
  return (
    <Box background='#120021' style={{
      maxWidth: '1920px',
      margin: 'auto'
    }}>
      <Footer></Footer>
    </Box>
  );
};

export default Home;
