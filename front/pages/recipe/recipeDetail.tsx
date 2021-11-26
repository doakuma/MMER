import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout, { siteTitle } from "../../components/Layout";
import ListDetail from "../../components/ListDetail";

let dummy = {
  imgSrc: "/images/stock/menu01.webp",
  imgWidth: 150,
  imgHeight: 100,
  menuNm: "잔치국수",
  menuDate: 3,
  menuData: [
    {
      recImg: "/images/stock/menu02.webp",
      recOrder: 1,
      recCont: "첫 번째 레시피 설명 레시피 설명 레시피 설명 레시피 설명 ",
    },
    {
      recImg: "",
      recOrder: 2,
      recCont: "두 번째 레시피 설명 레시피 설명 레시피 설명 레시피 설명 ",
    },
    {
      recImg: "",
      recOrder: 3,
      recCont: "세 번째 레시피 설명 레시피 설명 레시피 설명 레시피 설명 ",
    },
    {
      recImg: "",
      recOrder: 4,
      recCont: "네 번째 레시피 설명 레시피 설명 레시피 설명 레시피 설명 ",
    },
  ],
  menuTag: ["수미네 반찬", "주말", "파티 요리", "별미"],
};
const RecipeDetail = () => {
  return (
    <Layout home={false}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="cont-section">
        <ListDetail
          menuNm={dummy.menuNm}
          imgSrc={dummy.imgSrc}
          menuDate={dummy.menuDate}
          imgWidth={dummy.imgWidth}
          imgHeight={dummy.imgHeight}
          menuData={dummy.menuData}
          menuTag={dummy.menuTag}
        />
      </section>
    </Layout>
  );
};
export default RecipeDetail;
