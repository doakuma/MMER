import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Header from "./Header";
import Footer from "./Footer";

const name = "Your Name";
import {
  UseUserState,
  UseUserDispatch,
  getUser,
} from "../../pages/context/UserContext";
import { useEffect, useState } from "react";
// export const siteTitle = "MMER Test Site";
let id = "1";
const Layout = (props: any) => {
  const [userId, setUserId] = useState(null);
  const state = UseUserState();
  const dispatch = UseUserDispatch();

  let children = props.children;
  let home = props.home;
  let siteTitle = props.siteTitle;
  useEffect(() => {
    getUser(dispatch, id);
  }, [dispatch, id]);
  return (
    <div className="wrapper">
      <Head>
        <title>{siteTitle}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
