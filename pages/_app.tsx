import "../lib/styles/globals.css";
import type { AppProps } from "next/app";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import { storyblokComponents } from "../lib/blocks";

storyblokInit({
  accessToken: "ldAsR9RjspvNkyKDK6qQrgtt",
  use: [apiPlugin],
  components: storyblokComponents,
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
