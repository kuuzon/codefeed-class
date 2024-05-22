import { Fragment, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';

import '@/styles/scss/main.scss'
import { useRouter } from 'next/router';
import * as ga from '../lib/google-analytics'
import Layout from '@/components/layout';

function App({ Component, pageProps }) {
  // LOGIC
  // SETUP TRIGGER FOR GA PAGE INFO ON PAGE CHANGE
  const router = useRouter();
  useEffect(() => {
    // 1. Function to pass changed URL to our GA pageview function
    const handleRouteChange = (url) => {
      ga.pageview(url);
    }

    // 2. Call the above function when URL path changes (i.e. user navigates to another page)
    router.events.on('routeChangeComplete', handleRouteChange)

    // 3. Cleanup function - when user navigates away from page
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }

  }, [router.events]);

  // TEMPLATE
  return (
    <Fragment>
      {/* GA Scripts */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy='afterInteractive'
      />
      <Script
        id="google-analytics-script"
        strategy='afterInteractive'
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  )
}

export default App;