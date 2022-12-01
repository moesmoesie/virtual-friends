import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

type Props = {};

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="en">
        <script defer data-domain="mustafadarwesh.dev" src="https://plausible.io/js/script.js"></script>

        <Head>
          <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
          <link rel="preload" href="/fonts/inter-v11-latin/inter-v11-latin-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

          <link rel="preload" href="/fonts/inter-v11-latin/inter-v11-latin-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

          <link rel="preload" href="/fonts/inter-v11-latin/inter-v12-latin-900.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

          <link rel="preload" href="/fonts/source-sans-pro-v21-latin/source-sans-pro-v21-latin-300.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

          <link rel="preload" href="/fonts/source-sans-pro-v21-latin/source-sans-pro-v21-latin-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

          <link rel="preload" href="/fonts/source-sans-pro-v21-latin/source-sans-pro-v21-latin-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
