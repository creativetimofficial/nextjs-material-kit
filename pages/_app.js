import React from 'react';
import App from 'next/app';

import "../assets/scss/material-kit-react.scss?v=1.8.0";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}
