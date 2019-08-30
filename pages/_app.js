import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import "../assets/scss/material-kit-react.scss?v=1.8.0";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>NextJS Material Kit by Creative Tim</title>
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}
