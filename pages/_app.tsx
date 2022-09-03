import "../lib/styles/globals.css";
import type { AppProps } from "next/app";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import { storyblokComponents } from "../lib/blocks";
import { usePostHog } from "next-use-posthog";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API,
  use: [apiPlugin],
  components: storyblokComponents,
});

function MyApp({ Component, pageProps }: AppProps) {
  usePostHog(process.env.NEXT_PUBLIC_POSTHOG_API!, {
    api_host: "https://app.posthog.com",
  });

  return <Component {...pageProps} />;
}

export default MyApp;
