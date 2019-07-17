import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../components/header";

export default class ImageUploadApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  renderHead() {
    return (
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Secure Image Upload</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
      </Head>
    );
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container >
        {this.renderHead()}
        <CssBaseline />
        <Header></Header>
        <main style={{paddingTop: '100px', margin: '30px'}}>
            <Component {...pageProps} />
        </main>
      </Container>
    );
  }
}
