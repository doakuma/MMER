import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout, { siteTitle } from "../../components/Layout";
import ListItem from "../../components/ListItem";
import _ from "lodash";
import axios from "axios";
import { useEffect, useState } from "react";

const RecipeList = () => {
  let url = "/api/mock/recipeList";
  const [menuData, setMenuData] = useState([]);
  const getData = () => {
    axios
      .get(url)
      .then((res) => {
        let resData = _.get(res, "data.result.data");
        setMenuData(resData);
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
