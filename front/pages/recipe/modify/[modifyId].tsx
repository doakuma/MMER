import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import axios from "axios";
import Layout from "../../../components/common/Layout";
import ListDetailMenuInfo from "../../../components/recipe/ListDetailMenuInfo";
import ListDetaiIngrInfo from "../../../components/recipe/ListDetaiIngrInfo";
import ListDetailRecipeInfo from "../../../components/recipe/ListDetailRecipeInfo";
import _, { now } from "lodash";

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
}
function recipeModify() {
  const { query, pathname } = useRouter();
  const [menuData, setMenuData] = useState({});
  let _geturl = `/api/recipe/getRecipe`;
  let params = {
    id: _.get(query, "modifyId"),
  };
  console.log("props", params, query);
  const getData = async () => {
    await axios
      .get(_geturl, { params })
      .then((res) => {
        console.log("getDetails", res);
        let resData = _.get(res, "data.result.data");
        setMenuData(resData);
        // setMenuData(_.get(resData, "menuData"));
        // setMenuIngr(_.get(resData, "menuIngr"));
        // setRecipeData(_.get(resData, "recipeData"));
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  useEffect(() => {
    if (params.id) getData();
  }, [params.id]);
  let url = `/api/recipe/registRecipe`;
  let initparams = {
    imgSrc: "",
    imgWidth: "",
    imgeHeight: "",
    menuNm: "",
    mealType: "",
    lastCookDate: now(),
    menuDifct: 1,
    menuReqTime: "",
    userInfo: "",
    menuTag: "",
    id: "",
  };
  const [inputs, setInputs] = useState(initparams);

  const registData = async (e) => {
    e.preventDefault();
    const params = {
      imgSrc: inputs.imgSrc,
      imgWidth: inputs.imgWidth,
      imgeHeight: inputs.imgeHeight,
      menuNm: inputs.menuNm,
      mealType: inputs.mealType,
      lastCookDate: inputs.lastCookDate,
      menuDifct: inputs.menuDifct,
      menuReqTime: inputs.menuReqTime,
      userInfo: inputs.userInfo,
      menuTag: inputs.menuTag,
    };
    await axios
      .post(url, { params })
      .then((res) => {
        console.log("registData", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const modifyData = async (e) => {
    const params = {
      imgSrc: inputs.imgSrc,
      imgWidth: inputs.imgWidth,
      imgeHeight: inputs.imgeHeight,
      menuNm: inputs.menuNm,
      mealType: inputs.mealType,
      lastCookDate: inputs.lastCookDate,
      menuDifct: inputs.menuDifct,
      menuReqTime: inputs.menuReqTime,
      userInfo: inputs.userInfo,
      menuTag: inputs.menuTag,
      id: "",
    };
    await axios
      .post(url, { params })
      .then((res) => {
        console.log("modifyData", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const onChange = (e) => {
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
        <div>
          <label htmlFor="imgSrc">이미지 경로</label>
          <input type="text" id="imgSrc" name="imgSrc" onChange={onChange} />
        </div>
        <div>
          <label htmlFor="imgWidth">이미지 너비</label>
          <input
            type="text"
            id="imgWidth"
            name="imgWidth"
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="imgeHeight">이미지 높이</label>
          <input
            type="text"
            id="imgeHeight"
            name="imgeHeight"
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="menuNm">메뉴 이름</label>
          <input type="text" id="menuNm" name="menuNm" onChange={onChange} />
        </div>
        <div>
          <label htmlFor="mealType">메뉴 종류</label>
          <input
            type="text"
            id="mealType"
            name="mealType"
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="lastCookDate">마지막 조리</label>
          <input
            type="date"
            id="lastCookDate"
            name="lastCookDate"
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="menuDifct">메뉴 난이도</label>
          <input
            type="number"
            id="menuDifct"
            name="menuDifct"
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="menuReqTime">조리 시간</label>
          <input
            type="text"
            id="menuReqTime"
            name="menuReqTime"
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="userInfo">작성자</label>
          <input
            type="text"
            id="userInfo"
            name="userInfo"
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="menuTag">메뉴 태그</label>
          <input type="text" id="menuTag" name="menuTag" onChange={onChange} />
        </div>
        <div className="btn-area md">
          <button onClick={(e) => registData(e)}>메뉴 등록</button>
          <button onClick={(e) => modifyData(e)}>메뉴 수정</button>
          <button onClick={onReset}>취소</button>
        </div>
      </section>
    </Layout>
  );
}
export default recipeModify;
