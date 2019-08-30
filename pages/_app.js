import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router'
import NProgress from 'nprogress'

import "../assets/scss/material-kit-react.scss?v=1.8.0";

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  document.body.classList.add("page-transition-spinner");

})
Router.events.on('routeChangeComplete', () => {document.body.classList.remove("page-transition-spinner");})
Router.events.on('routeChangeError', () => {document.body.classList.remove("page-transition-spinner");})

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }
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
