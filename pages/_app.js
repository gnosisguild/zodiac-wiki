// pages/_app.js
import React from 'react';
import Head from 'next/head';
import '../styles/globals.css'; // Adjust the path if your global styles are in a different file

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" /> {/* Path to your favicon */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
