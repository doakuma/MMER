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
  imgHeight: number;
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
function RecipeModify() {
  const { query, pathname } = useRouter();
  const [inputs, setInputs] = useState({});
  const [menuInfo, setMenuInfo] = useState({});
  const [ingrList, setIngrList] = useState([]);
  const [seqList, setSeqList] = useState([]);
  let _geturl = `/api/recipe/getRecipe`;
  let params = {
    id: _.get(query, "modifyId"),
  };
  const getData = async () => {
    await axios
      .get(_geturl, { params })
      .then((res) => {
        let resData = _.get(res, "data.result.data");
        console.log("resData", resData);
        setInputs(resData);
        setMenuInfo(_.get(resData, "menuInfo"));
        setIngrList(_.get(resData, "ingrList"));
        setSeqList(_.get(resData, "seqList"));
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  useEffect(() => {
    if (params.id) getData();
  }, [params.id]);

  let url = `/api/recipe/registRecipe`;
  let modurl = `/api/recipe/modifyRecipe`;
  let initparams = {
    imgSrc: _.get(menuInfo, "imgSrc"),
    imgWidth: _.get(menuInfo, "imgWidth"),
    imgHeight: _.get(menuInfo, "imgHeight"),
    menuNm: _.get(menuInfo, "menuNm"),
    mealType: _.get(menuInfo, "mealType"),
    lastCookDate: _.get(menuInfo, "lastCookDate"),
    menuDifct: _.get(menuInfo, "menuDifct"),
    menuReqTime: _.get(menuInfo, "menuReqTime"),
    userInfo: _.get(menuInfo, "userInfo"),
    menuTag: _.get(menuInfo, "menuTag"),
    id: _.get(menuInfo, "id"),
    ingrList: _.get(inputs, "ingrList"),
    cookList: _.get(inputs, "seqList"),
  };
  let ingrParams = {
    ingrName: "",
    ingrType: "",
    ingrAmt: "",
    ingrFreq: null,
    menuId: params.id,
  };
  let cookParams = {
    cookDesc: "",
    cookImg: "",
    cookImgAlt: "",
    seqType: "",
    cookSeq: 0,
    menuId: params.id,
  };
  const modifyData = async (e: any) => {
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
    setMenuInfo({
      ...menuInfo,
      [name]: value,
    });
  };
  const onChangeIngr = (e: any) => {
    const { value, name, id } = e.target;
    const newIngr = ingrList.map((item: any, idx: number) => {
      if (_.includes(id, idx)) {
        return { ...item, [name]: value };
      }
      return item;
    });
    console.log("newIngr", newIngr);
    setIngrList(newIngr);
  };
  const onChangeCook = (e: any) => {
    const { value, name, id } = e.target;
    const newCook = seqList.map((item: any, idx: number) => {
      if (_.includes(id, idx)) {
        return { ...item, [name]: value };
      }
      return item;
    });
    setSeqList(newCook);
  };

  const addLine = (type: any) => {
    console.log("type", type);
    if (type === "addIngr") {
      setIngrList((prev) => [...prev, ingrParams]);
    } else {
      setSeqList((prev) => [...prev, cookParams]);
    }
  };
  const onReset = () => {
    console.log("initparams", initparams);
    // setInputs(initparams);
  };

  useEffect(() => {
    setInputs((prev) => {
      return {
        ...prev,
        menuInfo: menuInfo,
        ingrList: ingrList,
        seqList: seqList,
      };
    });
  }, [menuInfo, ingrList, seqList]);

  return (
    <Layout home={false} siteTitle="recipe details">
      <Head>{/* <title>{siteTitle}</title> */}</Head>
      <section className="cont-section">
        <NavSeq />
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
                defaultValue={_.get(menuInfo, "imgSrc")}
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
                defaultValue={_.get(menuInfo, "imgWidth")}
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
                defaultValue={_.get(menuInfo, "imgHeight")}
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
                defaultValue={_.get(menuInfo, "menuNm")}
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
                defaultValue={_.get(menuInfo, "mealType")}
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
                defaultValue={_.get(menuInfo, "lastCookDate")}
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
                defaultValue={_.get(menuInfo, "menuDifct")}
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
                defaultValue={_.get(menuInfo, "menuReqTime")}
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
                defaultValue={_.get(menuInfo, "userInfo")}
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
                defaultValue={_.get(menuInfo, "menuTag")}
              />
            </li>
          </ul>
        </div>
        <div className="regist regist_ingredient">
          <h2 className="stit-recipe">
            재료
            <button className="btn-add" onClick={() => addLine("addIngr")}>
              재료 추가
            </button>
          </h2>
          <ul className="list-regist">
            {!_.isEmpty(ingrList) &&
              ingrList.map((item: any, idx: number) => {
                return (
                  <LineItem
                    onClick={() => addLine("addIngr")}
                    onChange={(e) => onChangeIngr(e)}
                    {...{ ...item, lineType: "lineIngr" }}
                    key={idx}
                    lineKey={idx}
                  />
                );
              })}
          </ul>
        </div>
        <div className="regist regist_cookseq">
          <h2 className="stit-recipe">
            조리
            <button className="btn-add" onClick={() => addLine("addCook")}>
              재료 추가
            </button>
          </h2>
          <ul className="list-regist">
            {!_.isEmpty(seqList) &&
              seqList.map((item: any, idx: number) => (
                <LineItem
                  onClick={() => addLine("addCook")}
                  onChange={(e) => onChangeCook(e)}
                  {...{ ...item, lineType: "lineCook" }}
                  key={idx}
                  lineKey={idx}
                />
              ))}
          </ul>
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
export default RecipeModify;
