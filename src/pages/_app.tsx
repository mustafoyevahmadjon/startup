import "nprogress/nprogress.css";
import NProgress from 'nprogress';
import '../styles/globals.css';
import '@fontsource/roboto';
import 'react-multi-carousel/lib/styles.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/config/theme';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import { Client, HydrationProvider } from 'react-hydration-provider';
import Router from 'next/router';
import React, { useEffect } from 'react';
import { Provider } from "react-redux";
import { store } from "@/store/store";

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();
    Router.events.on('routeChangeStart', handleRouteStart);
    Router.events.on('routeChangeComplete', handleRouteDone);
    Router.events.on('routeChangeError', handleRouteDone);

    return () => {
      Router.events.off('routeChangeStart', handleRouteStart);
      Router.events.off('routeChangeComplete', handleRouteDone);
      Router.events.off('routeChangeError', handleRouteDone);
    };
  }, []);
  return (
    <HydrationProvider>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <ChakraProvider theme={theme}>
            <Client>
              <Component {...pageProps} />
            </Client>
          </ChakraProvider>
        </I18nextProvider>
      </Provider>
    </HydrationProvider>
  );
}

export default MyApp;