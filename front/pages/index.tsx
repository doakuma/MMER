import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout, { siteTitle } from "../components/Layout";

const dummy = [
  {
    imgSrc: "/images/stock/menu01.webp",
    imgWidth: 300,
    imgHeight: 200,
    menuNm: "비빔국수",
    menuDate: 4,
    menuId: "1",
    menuTag: ["백주부", "주말", "파티 요리", "별미"],
  },
  {
    imgSrc: "/images/stock/menu02.webp",
    imgWidth: 300,
    imgHeight: 200,
    menuNm: "떡복이",
    menuDate: 7,
    menuId: "2",
    menuTag: ["수미네 반찬", "주말", "파티 요리", "별미"],
  },
  {
    imgSrc: "/images/stock/menu03.webp",
    imgWidth: 300,
    imgHeight: 200,
    menuNm: "보쌈",
    menuDate: 3,
    menuId: "3",
    menuTag: ["에드워드권", "주말", "파티 요리", "별미"],
  },
  {
    imgSrc: "/images/stock/menu01.webp",
    imgWidth: 300,
    imgHeight: 200,
    menuNm: "비빔국수",
    menuDate: 6,
    menuId: "1",
    menuTag: ["백주부", "주말", "파티 요리", "별미"],
  },
  {
    imgSrc: "/images/stock/menu02.webp",
    imgWidth: 300,
    imgHeight: 200,
    menuNm: "떡복이",
    menuDate: 2,
    menuId: "2",
    menuTag: ["수미네 반찬", "주말", "파티 요리", "별미"],
  },
  {
    imgSrc: "/images/stock/menu03.webp",
    imgWidth: 300,
    imgHeight: 200,
    menuNm: "보쌈",
    menuDate: 1,
    menuId: "3",
    menuTag: ["에드워드권", "주말", "파티 요리", "별미"],
  },
  {
    imgSrc: "/images/stock/menu01.webp",
    imgWidth: 300,
    imgHeight: 200,
    menuNm: "비빔국수",
    menuDate: 4,
    menuId: "1",
    menuTag: ["백주부", "주말", "파티 요리", "별미"],
  },
  {
    imgSrc: "/images/stock/menu02.webp",
    imgWidth: 300,
    imgHeight: 200,
    menuNm: "떡복이",
    menuDate: 7,
    menuId: "2",
    menuTag: ["수미네 반찬", "주말", "파티 요리", "별미"],
  },
  {
    imgSrc: "/images/stock/menu03.webp",
    imgWidth: 300,
    imgHeight: 200,
    menuNm: "보쌈",
    menuDate: 3,
    menuId: "3",
    menuTag: ["에드워드권", "주말", "파티 요리", "별미"],
  },
];
const Home: NextPage = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
  );
};

export default Home;
