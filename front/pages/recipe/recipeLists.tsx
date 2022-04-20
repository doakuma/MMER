import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/common/Layout";
import ListItem from "../../components/recipe/ListItem";
import _ from "lodash";
import axios from "axios";
import { useEffect, useState } from "react";

const RecipeList = () => {
  let url = "/api/recipe/getList";
  const [menuData, setMenuData] = useState([]);
  const getData = () => {
    axios
      .get(url)
      .then((res) => {
        setMenuData(_.get(res, "data.result.list"));
      })
      .catch((err) => {
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
              return <ListItem {...row} key={idx} />;
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
