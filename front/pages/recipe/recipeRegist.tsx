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
import _, { now } from "lodash";

export interface IRegist {
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
  cookFreq: number;
}
function recipeRegist() {
  let url = `/api/recipe/registRecipe`;
  let params = {
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
    cookFreq: 0,
  };

  const [inputs, setInputs] = useState(params);

  const registData = async (e) => {
    e.preventDefault();
    const params = {
      imgSrc: inputs.imgSrc,
      imgWidth: inputs.imgWidth,
      imgeHeight: inputs.imgeHeight,
      menuNm: inputs.menuNm,
      mealType: inputs.mealType,
      lastCookDate: inputs.lastCookDate ? inputs.lastCookDate : now(),
      menuDifct: inputs.menuDifct,
      menuReqTime: inputs.menuReqTime,
      userInfo: inputs.userInfo,
      menuTag: inputs.menuTag,
      cookFreq: inputs.cookFreq,
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
        <ol className="list-seq">
          <li className="current">
            <span>기본정보</span>
          </li>
          <li>
            <span>재료정보</span>
          </li>
          <li>
            <span>양념정보</span>
          </li>
          <li>
            <span>조리정보</span>
          </li>
        </ol>
        <div className="regist regist_info">
          <h2 className="stit-recipe">메뉴 기본 정보</h2>
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
              />
            </li>
          </ul>
        </div>
        <div className="regist regist_ingredient">
          <h2 className="stit-recipe">재료</h2>
          <ul className="list-regist">
            <li>
              <label className="tit-regist" htmlFor="selIngr">
                재료 종류
              </label>
              <select name="selIngr" id="selIngr" className="text">
                <option value="">Type</option>
              </select>
              <label className="tit-regist" htmlFor="nmIngr">
                재료 명
              </label>
              <input type="text" className="text" id="nmIngr" />
              <label className="tit-regist" htmlFor="amtIngr">
                재료 양
              </label>
              <input type="text" className="text" id="amtIngr" />
            </li>
          </ul>
          <div className="btn-area md">
            <button className="btn secondary">재료 추가</button>
          </div>
        </div>
        <div className="regist regist_source">
          <h2 className="stit-recipe">양념</h2>
          <ul className="list-regist">
            <li>
              <label className="tit-regist" htmlFor="nmSrcs">
                양념 명
              </label>
              <input type="text" className="text" id="nmSrcs" />
              <label className="tit-regist" htmlFor="amtSrcs">
                양념 양
              </label>
              <textarea className="text" id="amtSrcs"></textarea>
            </li>
          </ul>
          <div className="btn-area md">
            <button className="btn secondary">순서 추가</button>
          </div>
        </div>
        <div className="regist regist_cookseq">
          <h2 className="stit-recipe">조리</h2>
          <ul className="list-regist">
            <li>
              <label className="tit-regist" htmlFor="cookSeq01">
                1
              </label>
              <input type="text" className="text" id="cookSeq01" />
            </li>
          </ul>
          <div className="btn-area md">
            <button className="btn secondary">순서 추가</button>
          </div>
        </div>
        <div className="btn-area md">
          <button className="btn primary" onClick={(e) => registData(e)}>
            메뉴 등록
          </button>
          <button className="btn primary" onClick={onReset}>
            취소
          </button>
        </div>
      </section>
    </Layout>
  );
}
export default recipeRegist;
