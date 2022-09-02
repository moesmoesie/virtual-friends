import "../lib/styles/globals.css";
import type { AppProps } from "next/app";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import { storyblokComponents } from "../lib/blocks";
import Script from "next/script";

storyblokInit({
  accessToken: "ldAsR9RjspvNkyKDK6qQrgtt",
  use: [apiPlugin],
  components: storyblokComponents,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-Y2D5NZRBTD"
      />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Y2D5NZRBTD');
        `}
      </Script>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;

// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y2D5NZRBTD"></script>
// <script>
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());

// gtag('config', 'G-Y2D5NZRBTD');
// </script>
