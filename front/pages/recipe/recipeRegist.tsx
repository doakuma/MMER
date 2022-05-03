import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import axios from "axios";
import Layout from "../../components/common/Layout";
import LineItem from "../../components/recipe/LineItem";
import ListDetaiIngrInfo from "../../components/recipe/ListDetaiIngrInfo";
import ListDetailRecipeInfo from "../../components/recipe/ListDetailRecipeInfo";
import _, { now } from "lodash";
import NavSeq from "../../components/recipe/NavSeq";

export interface IRegist {
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  menuNm: string;
  mealType: string;
  lastCookDate: Date;
  menuDifct: string;
  menuReqTime: string;
  userInfo: string;
  menuTag: string;
  cookFreq: number;
  lineIngr: any;
  cookList: any;
}
function RecipeModify() {
  const router = useRouter();
  let url = `/api/recipe/registRecipe`;
  let params = {
    imgSrc: "",
    imgWidth: "",
    imgHeight: "",
    menuNm: "",
    mealType: "",
    lastCookDate: now(),
    menuDifct: 1,
    menuReqTime: "",
    userInfo: "",
    menuTag: "",
    cookFreq: 0,
    ingrList: [],
    cookList: [],
  };
  // let ingrParams = {
  //   lineType: "lineIngr",
  //   ingrName: "감자",
  //   ingrType: "채소",
  //   ingrAmt: "2개",
  // };
  // let cookParams = {
  //   lineType: "lineCook",
  //   cookDesc: "감자를 깎는다",
  //   cookImg: "",
  //   cookImgAlt: "",
  //   seqType: "재료손질",
  //   cookSeq: 1,
  // };
  let ingrParams = {
    lineType: "lineIngr",
    ingrName: "",
    ingrType: "",
    ingrAmt: "",
  };
  let cookParams = {
    lineType: "lineCook",
    cookDesc: "",
    cookImg: "",
    cookImgAlt: "",
    seqType: "재료",
  };

  const [inputs, setInputs] = useState(params); // 기본정보 입력
  const [lineIngr, setLineIngr] = useState([ingrParams]); // 재료 라인 배열
  const [lineCook, setLineCook] = useState([cookParams]); // 조리 라인 배열

  const registData = async (e: any) => {
    e.preventDefault();
    const params = {
      imgSrc: inputs.imgSrc,
      imgWidth: inputs.imgWidth,
      imgHeight: inputs.imgHeight,
      menuNm: inputs.menuNm,
      mealType: inputs.mealType,
      lastCookDate: inputs.lastCookDate ? inputs.lastCookDate : now(),
      menuDifct: inputs.menuDifct,
      menuReqTime: inputs.menuReqTime,
      userInfo: inputs.userInfo,
      menuTag: inputs.menuTag,
      cookFreq: inputs.cookFreq,
      ingrList: lineIngr,
      cookList: lineCook,
    };
    await axios
      .post(url, { params })
      .then((res) => {
        console.log("registData", res);
        if (_.get(res, "data.result.data.serverStatus") === 2) {
          router.push("/recipe/recipeLists");
        }
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
  const onChangeIngr = (e: any) => {
    const { value, name, id } = e.target;
    const newIngr = lineIngr.map((item, idx) => {
      if (_.includes(id, idx)) {
        return { ...item, [name]: value };
      }
      return item;
    });
    setLineIngr(newIngr);
  };
  const onChangeCook = (e: any) => {
    const { value, name, id } = e.target;
    const newCook = lineCook.map((item, idx) => {
      if (_.includes(id, idx)) {
        return { ...item, [name]: value };
      }
      return item;
    });
    setLineCook(newCook);
  };
  const onReset = () => {
    setInputs(params);
  };

  const addLine = (type: any) => {
    console.log("type", type);
    if (type === "addIngr") {
      setLineIngr((prev) => [...prev, ingrParams]);
    } else {
      setLineCook((prev) => [...prev, cookParams]);
    }
  };

  useEffect(() => {
    setInputs((prev) => {
      return {
        ...prev,
        ingrList: lineIngr,
        cookList: lineCook,
      };
    });
  }, [lineIngr, lineCook]);

  return (
    <Layout home={false} siteTitle="recipe details">
      <Head>{/* <title>{siteTitle}</title> */}</Head>
      <section className="cont-section">
        <NavSeq />
        <div className="regist regist_info">
          <h2 className="stit-recipe">메뉴 기본 정보</h2>

          <ul className="list-regist">
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
              <label className="tit-regist" htmlFor="imgHeight">
                이미지 높이
              </label>
              <input
                className="text"
                type="text"
                id="imgHeight"
                name="imgHeight"
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
            {lineIngr.map((item, idx) => {
              return (
                <LineItem
                  onClick={() => addLine("addIngr")}
                  onChange={(e) => onChangeIngr(e)}
                  {...item}
                  key={idx}
                  lineKey={idx}
                />
              );
            })}
          </ul>
        </div>
        <div className="regist regist_cookseq">
          <h2 className="stit-recipe">조리</h2>
          <ul className="list-regist">
            {lineCook.map((item, idx) => (
              <LineItem
                onClick={() => addLine("addCook")}
                onChange={(e) => onChangeCook(e)}
                {...item}
                key={idx}
                lineKey={idx}
              />
            ))}
          </ul>
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
export default RecipeModify;
