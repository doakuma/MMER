import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/common/Layout";
import ListItem from "../../components/recipe/ListItem";
import _ from "lodash";
import axios from "axios";
import { useEffect, useState } from "react";

const RecipeList = (props: any) => {
  let url = "/api/recipe/getRecipeList";
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
    // getData();
    setMenuData(_.get(props, "data"));
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

export const getStaticProps = async () => {
  let url = "http://localhost:3000/api/recipe/getRecipeList";
  // try {
  const res = await axios.get(url);
  // .catch((e) => console.info("axios error=>", e.message));
  let data = _.get(res, "data.result.list");
  return {
    props: { data },
    revalidate: 1,
  };
};
