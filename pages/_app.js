import React from 'react';
import Head from 'next/head';
import ZestyHead from 'components/zesty/ZestyHead';
// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css';
// own css files here
import '../styles/style.css';
import '../styles/responsive.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* logic to run zesty head if it detects zesty meta data patterns in props, else load alternate head for you to edit */}
      {(pageProps?.meta?.web && <ZestyHead content={pageProps} />) || (
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Next App</title>
        </Head>
      )}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
