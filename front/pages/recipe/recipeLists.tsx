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
  },
  {
    imgSrc: "/images/stock/menu02.webp",
    imgWidth: 300,
    imgHeight: 200,
    menuNm: "떡복이",
    menuDate: 7,
    menuId: "2",
  },
  {
    imgSrc: "/images/stock/menu03.webp",
    imgWidth: 300,
    imgHeight: 200,
    menuNm: "보쌈",
    menuDate: 3,
    menuId: "3",
  },
  {
    imgSrc: "/images/stock/menu01.webp",
    imgWidth: 300,
    imgHeight: 200,
    menuNm: "비빔국수",
    menuDate: 4,
    menuId: "1",
  },
  {
    imgSrc: "/images/stock/menu02.webp",
    imgWidth: 300,
    imgHeight: 200,
    menuNm: "떡복이",
    menuDate: 7,
    menuId: "2",
  },
  {
    imgSrc: "/images/stock/menu03.webp",
    imgWidth: 300,
    imgHeight: 200,
    menuNm: "보쌈",
    menuDate: 3,
    menuId: "3",
  },
  {
    imgSrc: "/images/stock/menu01.webp",
    imgWidth: 300,
    imgHeight: 200,
    menuNm: "비빔국수",
    menuDate: 4,
    menuId: "1",
  },
  {
    imgSrc: "/images/stock/menu02.webp",
    imgWidth: 300,
    imgHeight: 200,
    menuNm: "떡복이",
    menuDate: 7,
    menuId: "2",
  },
  {
    imgSrc: "/images/stock/menu03.webp",
    imgWidth: 300,
    imgHeight: 200,
    menuNm: "보쌈",
    menuDate: 3,
    menuId: "3",
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
