import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/common/Layout";
import _ from "lodash";
import axios from "axios";
import { useEffect, useState } from "react";
import ListItem from "../components/recipe/ListItem";

const Home: NextPage = () => {
  let url = "/api/recipeLists";
  const [menuData, setMenuData] = useState([]);
  const getData = () => {
    axios
      .get(url)
      .then((res) => {
        // console.log("res", res.data.result);
        setMenuData(_.get(res, "data.result.list"));
      })
      .catch((err) => {});
  };
  useEffect(() => {
    getData();
  }, []);
  let sortInfo, topInfo, btmInfo;
  // sortInfo = _.reverse(_.sortBy(dummy, "menuDate"));
  topInfo = _.slice(menuData, 0, 3);
  // btmInfo = _.slice(sortInfo, 3, sortInfo.length);
  console.info("topInfo", topInfo);
  return (
    <Layout home siteTitle="main">
      <div className="main-top">
        {topInfo.map((row, idx) => {
          return <ListItem {...row} key={idx} />;
        })}
      </div>
      {/* <div className="main-bottom">
        {btmInfo.map((row, idx) => {
          return (
            <ListItem
              imgSrc={row.imgSrc}
              imgWidth={row.imgWidth}
              imgHeight={row.imgHeight}
              menuNm={row.menuNm}
              menuDate={row.menuDate}
              menuId={row.menuId}
              menuTag={row.menuTag}
              key={idx}
            />
          );
        })}
      </div> */}
    </Layout>
  );
};

export default Home;
