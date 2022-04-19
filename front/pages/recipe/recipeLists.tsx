import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/common/Layout";
import ListItem from "../../components/recipe/ListItem";
import _ from "lodash";
import axios from "axios";
import { useEffect, useState } from "react";

const RecipeList = () => {
  let url = "/api/recipeLists";
  const [menuData, setMenuData] = useState([]);
  const getData = () => {
    axios
      .get(url)
      .then((res) => {
        // let resData = _.get(res, "data.result.data");
        setMenuData(_.get(res, "data.result.list"));
        console.log("getData", res);
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
              console.log("menuData", row);
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
