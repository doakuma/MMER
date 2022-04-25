import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import axios from "axios";
import Layout from "../../../components/common/Layout";
import LineItem from "../../../components/recipe/LineItem";
import ListDetaiIngrInfo from "../../../components/recipe/ListDetaiIngrInfo";
import ListDetailRecipeInfo from "../../../components/recipe/ListDetailRecipeInfo";
import _, { now } from "lodash";
import NavSeq from "../../../components/recipe/NavSeq";

export interface IModify {
  imgSrc: string;
  imgWidth: number;
  imgeHeight: number;
  menuNm: string;
  mealType: string;
  lastCookDate: Date;
  menuDifct: string;
  menuReqTime: string;
  userInfo: string;
  menuTag: string;
  id: string;
  lineIngr: Array<any>;
  cookList: Array<any>;
}
function recipeModify() {
  const { query, pathname } = useRouter();
  const [menuData, setMenuData] = useState({});
  const [menuIngr, setMenuIngr] = useState([]);
  const [recipeData, setRecipeData] = useState({});
  let _geturl = `/api/recipe/getRecipe`;
  let params = {
    id: _.get(query, "modifyId"),
  };
  console.log("props", params, query);
  const getData = async () => {
    await axios
      .get(_geturl, { params })
      .then((res) => {
        let resData = _.get(res, "data.result.data");
        console.log("getDetails", resData);
        setMenuData(resData);
        setMenuData(_.get(resData, "menuInfo"));
        setMenuIngr(_.get(resData, "ingrList"));
        setRecipeData(_.get(resData, "seqList"));
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  useEffect(() => {
    if (params.id) getData();
  }, [params.id]);
  useEffect(() => {
    setInputs(initparams);
  }, [menuData]);

  let url = `/api/recipe/registRecipe`;
  let modurl = `/api/recipe/modifyRecipe`;
  let initparams = {
    imgSrc: _.get(menuData, "imgSrc"),
    imgWidth: _.get(menuData, "imgWidth"),
    imgeHeight: _.get(menuData, "imgHeight"),
    menuNm: _.get(menuData, "menuNm"),
    mealType: _.get(menuData, "mealType"),
    lastCookDate: _.get(menuData, "lastCookDate"),
    menuDifct: _.get(menuData, "menuDifct"),
    menuReqTime: _.get(menuData, "menuReqTime"),
    userInfo: _.get(menuData, "userInfo"),
    menuTag: _.get(menuData, "menuTag"),
    id: _.get(menuData, "id"),
    ingrList: menuIngr,
    cookList: recipeData,
  };
  const [inputs, setInputs] = useState({});
  const modifyData = async (e) => {
    await axios
      .post(modurl, { inputs })
      .then((res) => {
        console.log("modifyData", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const onChange = (e: any) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onReset = () => {
    setInputs(params);
  };

  return (
    <Layout home={false} siteTitle="recipe details">
      <Head>{/* <title>{siteTitle}</title> */}</Head>
      <section className="cont-section">
        <div className="regist regist_info">
          <h2 className="stit-recipe">메뉴 기본 정보</h2>

          <NavSeq />

          <ul className="list-regist">
            <li>
              <label className="tit-regist" htmlFor="imgSrc">
                이미지 경로
              </label>
              <input
                className="text"
                type="text"
                id="imgSrc"
                name="imgSrc"
                onChange={onChange}
                defaultValue={_.get(menuData, "imgSrc")}
              />
            </li>
            <li>
              <label className="tit-regist" htmlFor="imgWidth">
                이미지 너비
              </label>
              <input
                className="text"
                type="text"
                id="imgWidth"
                name="imgWidth"
                onChange={onChange}
                defaultValue={_.get(menuData, "imgWidth")}
              />
            </li>
            <li>
              <label className="tit-regist" htmlFor="imgeHeight">
                이미지 높이
              </label>
              <input
                className="text"
                type="text"
                id="imgeHeight"
                name="imgeHeight"
                onChange={onChange}
                defaultValue={_.get(menuData, "imgHeight")}
              />
            </li>
            <li>
              <label className="tit-regist" htmlFor="menuNm">
                메뉴 이름
              </label>
              <input
                className="text"
                type="text"
                id="menuNm"
                name="menuNm"
                onChange={onChange}
                defaultValue={_.get(menuData, "menuNm")}
              />
            </li>
            <li>
              <label className="tit-regist" htmlFor="mealType">
                메뉴 종류
              </label>
              <input
                className="text"
                type="text"
                id="mealType"
                name="mealType"
                onChange={onChange}
                defaultValue={_.get(menuData, "mealType")}
              />
            </li>
            <li>
              <label className="tit-regist" htmlFor="lastCookDate">
                마지막 조리
              </label>
              <input
                className="text"
                type="date"
                id="lastCookDate"
                name="lastCookDate"
                onChange={onChange}
                defaultValue={_.get(menuData, "lastCookDate")}
              />
            </li>
            <li>
              <label className="tit-regist" htmlFor="menuDifct">
                메뉴 난이도
              </label>
              <input
                className="text"
                type="number"
                id="menuDifct"
                name="menuDifct"
                onChange={onChange}
                defaultValue={_.get(menuData, "menuDifct")}
              />
            </li>
            <li>
              <label className="tit-regist" htmlFor="menuReqTime">
                조리 시간
              </label>
              <input
                className="text"
                type="text"
                id="menuReqTime"
                name="menuReqTime"
                onChange={onChange}
                defaultValue={_.get(menuData, "menuReqTime")}
              />
            </li>
            <li>
              <label className="tit-regist" htmlFor="userInfo">
                작성자
              </label>
              <input
                className="text"
                type="text"
                id="userInfo"
                name="userInfo"
                onChange={onChange}
                defaultValue={_.get(menuData, "userInfo")}
              />
            </li>
            <li>
              <label className="tit-regist" htmlFor="menuTag">
                메뉴 태그
              </label>
              <input
                className="text"
                type="text"
                id="menuTag"
                name="menuTag"
                onChange={onChange}
                defaultValue={_.get(menuData, "menuTag")}
              />
            </li>
          </ul>
        </div>
        <div className="regist regist_ingredient">
          <h2 className="stit-recipe">재료</h2>
          {/* <ul className="list-regist">
            {lineIngr.map((item, idx) => {
              console.log("lineIngr", item);
              return (
                <LineItem
                  onClick={() => addLine("addIngr")}
                  {...item}
                  key={idx}
                />
              );
            })}
          </ul> */}
        </div>
        <div className="regist regist_cookseq">
          <h2 className="stit-recipe">조리</h2>
          {/* <ul className="list-regist">
            {lineCook.map((item, idx) => (
              <LineItem
                onClick={() => addLine("addCook")}
                {...item}
                key={idx}
              />
            ))}
          </ul> */}
        </div>
        <div className="btn-area md">
          <button className="btn primary" onClick={(e) => modifyData(e)}>
            메뉴 수정
          </button>
          <button className="btn primary" onClick={onReset}>
            취소
          </button>
        </div>
      </section>
    </Layout>
  );
}
export default recipeModify;
