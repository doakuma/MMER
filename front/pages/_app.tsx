import "../styles/globals.css";
import "../styles/layout.css";

import type { AppProps } from "next/app";
import { UserProvider } from "./context/UserContext";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const isSignIn = false;
  // const { user } = UseUserState();
  // console.log("user", useUserState());
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
};

export default MyApp;
