import React from "react";
import Head from "next/head";

// In _app.tsx or Layout component

<div style={{
  background: '#0b1e3a',
  color: 'white',
  padding: '12px 16px',
  textAlign: 'center',
  fontSize: '14px'
}}>
  <strong>Zodiac has evolved.</strong> The actively maintained Zodiac app and documentation now live at{' '}
  <a
    href="https://zodiac.eco"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'underline', fontWeight: 600 }}
  >
    zodiac.eco
  </a>.
</div>


function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
