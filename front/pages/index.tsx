import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout, { siteTitle } from "../components/Layout";
import ListItem from "../components/ListItem";
import _ from "lodash";

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
  let sortInfo, topInfo, btmInfo;
  sortInfo = _.reverse(_.sortBy(dummy, "menuDate"));
  topInfo = _.slice(sortInfo, 0, 3);
  btmInfo = _.slice(sortInfo, 3, sortInfo.length);
  console.info("topInfo", btmInfo, topInfo);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="main-top">
        {topInfo.map((row, idx) => {
          return (
            <ListItem
              imgSrc={row.imgSrc}
              imgWidth={row.imgWidth}
              imgHeight={row.imgHeight}
              menuNm={row.menuNm}
              menuDate={row.menuDate}
              menuId={row.menuId}
              menuTag={row.menuTag}
              isHome={true}
              key={idx}
            />
          );
        })}
      </div>
      {/* <div className="main-bottom">
        {btmInfo.map((row, idx) => {
          return (
            <ListItem
              imgSrc={row.imgSrc}
              imgWidth={row.imgWidth}
              imgHeight={row.imgHeight}
              menuNm={row.menuNm}
              menuDate={row.menuDate}
              menuId={row.menuId}
              menuTag={row.menuTag}
              key={idx}
            />
          );
        })}
      </div> */}
    </Layout>
  );
};

export default Home;
