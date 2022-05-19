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

const RecipeDetail = (props: any) => {
  const { query, pathname } = useRouter();
  const router = useRouter();
  const [menuData, setMenuData] = useState({});
  const [menuIngr, setMenuIngr] = useState([]);
  const [recipeData, setRecipeData] = useState({});
  let url = `/api/recipe/getRecipe`;
  let removeUrl = `/api/recipe/removeRecipe`;
  let params = {
    id: query.menuId,
  };

  const getData = async () => {
    await axios
      .get(url, { params })
      .then((res) => {
        console.log("getDetails", res);
        let resData = _.get(res, "data.result");
        setMenuData(_.get(resData, "data.menuInfo"));
        setMenuIngr(_.get(resData, "data.ingrList"));
        setRecipeData(_.get(resData, "data.seqList"));
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  const removeData = async (e: any) => {
    e.preventDefault();
    await axios
      .post(removeUrl, { params })
      .then((res) => {
        console.log("removeData", res);
        if (_.get(res, "data.result.data.serverStatus") === 2) {
          router.push("/recipe/recipeLists");
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  // useEffect(() => {
  //   if (params.id) getData();
  // }, [params.id]);

  useEffect(() => {
    setMenuData(_.get(props, "menuData.menuInfo"));
    setMenuIngr(_.get(props, "menuData.ingrList"));
    setRecipeData(_.get(props, "menuData.seqList"));
  }, []);

  return (
    <Layout home={false} siteTitle="recipe details">
      <Head>{/* <title>{siteTitle}</title> */}</Head>
      <section className="cont-section">
        <div className="cont-detail">
          <div className="detail-left">
            <ListDetailMenuInfo {...menuData} />
            <ListDetaiIngrInfo props={menuIngr} />
          </div>
          <div className="detail-right">
            <ListDetailRecipeInfo {...recipeData} />
          </div>
        </div>
        <div className="btn-area md">
          <Link href="/recipe/recipeLists">
            <a className="btn primary">리스트 보기</a>
          </Link>
          <Link href={`/recipe/modify/${params.id}`}>
            <a className="btn primary">메뉴 수정</a>
          </Link>
          <button onClick={(e) => removeData(e)} className="btn primary">
            메뉴 삭제
          </button>
        </div>
      </section>
    </Layout>
  );
};
export default RecipeDetail;

export const getStaticProps = async (context: any) => {
  const {
    params: { menuId },
  } = context;
  // console.log("getStaticProps", context);
  let url = "http://localhost:3000/api/recipe/getRecipe";
  const res = await axios.get(url, { params: { id: menuId } });
  const data = _.get(res, "data.result.data");
  // console.log("getStaticProps", data);
  return {
    props: {
      menuData: data,
    },
  };
};

export const getStaticPaths = async () => {
  let url = "http://localhost:3000/api/recipe/getRecipeList";
  const res = await axios.get(url);
  const data = _.get(res, "data.result.list");
  const paths = data.map((menu: any) => ({
    params: {
      menuId: menu.id + "",
    },
  }));
  // console.log("getStaticPaths", paths);
  return {
    paths,
    fallback: "blocking",
  };
};
