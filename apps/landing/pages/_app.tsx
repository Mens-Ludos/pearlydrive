import type { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

const LandingApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>PearlyDrive</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default LandingApp;
