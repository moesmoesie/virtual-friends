import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
      <link
          rel="preload"
          href={`/fonts/inter-v11-latin/inter-v11-latin-700.woff2`}
          as="font"
          crossOrigin=""
        />

        <link
          rel="preload"
          href={`/fonts/inter-v11-latin/inter-v11-latin-regular.woff2`}
          as="font"
          crossOrigin=""
        />

        <link
          rel="preload"
          href={`/fonts/roboto-v30-latin/roboto-v30-latin-700.woff2`}
          as="font"
          crossOrigin=""
        />

        <link
          rel="preload"
          href={`/fonts/roboto-v30-latin/roboto-v30-latin-regular.woff2`}
          as="font"
          crossOrigin=""
        />
      </Head>
      <body className="min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
