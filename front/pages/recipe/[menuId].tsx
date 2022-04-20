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
  let url = `/api/recipe/getRecipe`;
  let removeUrl = `/api/recipe/removeRecipe`;
  let params = {
    id: query.menuId,
  };

  console.log("props", params);
  const getData = async () => {
    await axios
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
  const removeData = async (e) => {
    e.preventDefault();
    await axios
      .post(removeUrl, { params })
      .then((res) => {
        console.log("removeData", res);
      })
      .catch((err) => {
        console.log("err", err);
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
          <Link href="/recipe/recipeLists">
            <a className="btn primary">메뉴 수정</a>
          </Link>
          <button onClick={(e) => removeData(e)}>메뉴 삭제</button>
        </div>
      </section>
    </Layout>
  );
}
export default RecipeDetail;
