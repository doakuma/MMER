import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/common/Layout";
import ListItem from "../../components/pantry/ListItem";
import _ from "lodash";
import axios from "axios";
import { useEffect, useState } from "react";

const PantryList = () => {
  let url = "/api/mock/pantryList";
  const [menuData, setMenuData] = useState([]);
  const getData = () => {
    axios
      .get(url)
      .then((res) => {
        let resData = _.get(res, "data.result.data");
        console.log("resData", resData);
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
    <Layout home={false} siteTitle="recipe List">
      <section className="cont-section">
        <div className="box-flter">filters</div>
        <div className="cont-list">
          {!_.isEmpty(menuData) &&
            menuData.map((row, idx) => {
              return <ListItem listData={row} key={idx} />;
            })}
        </div>
        {/* <Link href="/recipe/recipeDetail">
          <a>recipe list</a>
        </Link> */}
        <div className="box-utils">
          <div className="btn-area md">
            <button
              type="button"
              className="btn"
              onClick={() => {
                alert("레이어 팝업으로 재료 추가");
              }}
            >
              재료 추가
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => {
                alert("재료 수정 페이지로 이동?");
              }}
            >
              재료 수정
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default PantryList;
