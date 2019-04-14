import React from 'react';
import Head from 'next/head';
import App, { Container } from 'next/app';

export default class DragonsApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>DragonsApp</title>
        </Head>
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
            background-color: #e6ecf0;
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
          }
        `}</style>
        <Component {...pageProps} />
      </Container>
    );
  }
}
