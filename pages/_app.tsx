import "../lib/styles/globals.css";
import type { AppProps } from "next/app";
import { library,config } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import {storyblokComponents} from '../lib/blocks'

config.autoAddCss = false;
library.add(fas, fab);

storyblokInit({
  accessToken: "ldAsR9RjspvNkyKDK6qQrgtt",
  use: [apiPlugin],
  components: storyblokComponents
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;