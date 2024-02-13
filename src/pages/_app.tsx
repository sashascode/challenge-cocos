import * as React from 'react';
import '@/styles/globals.css';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../theme';
import createEmotionCache from '../createEmotionCache';
import { Layout } from '@/components/Layout';
import { ReduxProvider } from '@/redux/provider';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta
          name='viewport'
          content='initial-scale=1, width=device-width'
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;500;700&display=swap" rel="stylesheet"></link>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ReduxProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ReduxProvider>
        
      </ThemeProvider>
    </CacheProvider>
  );
}