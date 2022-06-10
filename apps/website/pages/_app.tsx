import type { AppProps } from "next/app";
import "tw-config/shared-styles.css";
import "../global/styles.css";
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
