import App from 'next/app';
import Head from 'next/head';

import '../styles/index.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Rad Notes</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
