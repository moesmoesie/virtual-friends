import "../styles/globals.css";
import { usePostHog } from "next-use-posthog";

function MyApp({ Component, pageProps }) {
  usePostHog(process.env.NEXT_PUBLIC_POSTHOG, {
    api_host: "https://eu.posthog.com",
  });

  return <Component {...pageProps} />;
}

export default MyApp;
