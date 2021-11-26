import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout, { siteTitle } from "../../components/Layout";
import ListItem from "../../components/ListItem";

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
const RecipeList = () => {
  return (
    <Layout home={false}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="cont-section">
        <div className="cont-list">
          {dummy.map((row, idx) => {
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
        </div>
        <Link href="/recipe/recipeDetail">
          <a>recipe list</a>
        </Link>
      </section>
    </Layout>
  );
};
export default RecipeList;
