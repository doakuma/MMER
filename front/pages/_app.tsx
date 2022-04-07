import "../styles/globals.css";
import "../styles/layout.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("1111111");
  return <Component {...pageProps} />;
}

export default MyApp;
