import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout, { siteTitle } from "../../components/Layout";
import ListDetailMenuInfo from "../../components/ListDetailMenuInfo";
import ListDetaiIngrInfo from "../../components/ListDetaiIngrInfo";
import ListDetailRecipeInfo from "../../components/ListDetailRecipeInfo";
import { useEffect, useState } from "react";
import axios from "axios";

const RecipeDetail = () => {
  let url = "/api/mock/recipeDetail";
  const [menuData, setMenuData] = useState({});
  const [menuIngr, setMenuIngr] = useState([]);
  const [recipeData, setRecipeData] = useState({});

  const getData = () => {
    axios
      .get(url)
      .then((res) => {
        let resData = _.get(res, "data.result");
        setMenuData(_.get(resData, "menuData"));
        setMenuIngr(_.get(resData, "menuIngr"));
        setRecipeData(_.get(resData, "recipeData"));
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout home={false}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="cont-section">
        <div className="cont-detail">
          <div className="detail-left">
            <ListDetailMenuInfo menuInfo={menuData} />
            <ListDetaiIngrInfo ingrInfo={menuIngr} />
          </div>
          <div className="detail-right">
            <ListDetailRecipeInfo recpInfo={recipeData} />
          </div>
        </div>
        <div className="btn-area md">
          <Link href="/recipe/recipeLists">
            <a className="btn primary">리스트 보기</a>
          </Link>
        </div>
      </section>
    </Layout>
  );
};
export default RecipeDetail;
