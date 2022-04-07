import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/common/Layout";
import ListItem from "../../components/recipe/ListItem";
import _ from "lodash";
import axios from "axios";
import { useEffect, useState } from "react";

const RecipeList = () => {
  let url = "/api/mock/recipeList";
  let _url = "http://localhost:1337/api/recipes";
  const [menuData, setMenuData] = useState([]);
  const getData = () => {
    axios
      .get(_url)
      .then((res: any) => {
        let resData = _.get(res, "data.data");
        let _resData = _.chain(resData)
          .map((row, idx) => {
            console.log("chain", row);
          })
          .value();
        console.log("data", _.get(res, "data.data"));
        setMenuData(resData);
      })
      .catch((err: any) => {
        console.log("error", err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout home={false} siteTitle="recipe List">
      <section className="cont-section">
        <div className="cont-list">
          {!_.isEmpty(menuData) &&
            menuData.map((row, idx) => {
              return <ListItem listData={row} key={idx} />;
            })}
        </div>
        {/* <Link href="/recipe/recipeDetail">
          <a>recipe list</a>
        </Link> */}
      </section>
    </Layout>
  );
};
export default RecipeList;
