import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import axios from "axios";
import Layout from "../../components/common/Layout";
import ListDetailMenuInfo from "../../components/recipe/ListDetailMenuInfo";
import ListDetaiIngrInfo from "../../components/recipe/ListDetaiIngrInfo";
import ListDetailRecipeInfo from "../../components/recipe/ListDetailRecipeInfo";
import _ from "lodash";

function RecipeDetail() {
  const { query, pathname } = useRouter();
  const [menuData, setMenuData] = useState({});
  const [menuIngr, setMenuIngr] = useState([]);
  const [recipeData, setRecipeData] = useState({});
  let url = `/api/recipe/getData`;
  let params = {
    id: query.menuId,
  };

  console.log("props", params);
  const getData = () => {
    axios
      .get(url, { params })
      .then((res) => {
        console.log("getDetails", res);
        let resData = _.get(res, "data.result");
        setMenuData(resData);
        // setMenuData(_.get(resData, "menuData"));
        // setMenuIngr(_.get(resData, "menuIngr"));
        // setRecipeData(_.get(resData, "recipeData"));
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  useEffect(() => {
    if (params.id) getData();
  }, [params.id]);

  return (
    <Layout home={false} siteTitle="recipe details">
      <Head>{/* <title>{siteTitle}</title> */}</Head>
      <section className="cont-section">
        <div className="cont-detail">
          <div className="detail-left">
            <ListDetailMenuInfo {...menuData} />
            <ListDetaiIngrInfo {...menuData} />
          </div>
          <div className="detail-right">
            <ListDetailRecipeInfo {...menuData} />
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
}
export default RecipeDetail;
