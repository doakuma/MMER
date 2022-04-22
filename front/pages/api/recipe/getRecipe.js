// import { getLists } from "../../sql/recipe";
import excuteQuery from "../../../db";

import _ from "lodash";

export default async function handler(req, res) {
  if (req.method !== "GET") res.status(405);
  const { id } = req.query;
  console.log(
    "req==============================================================",
    req.query,
    id
  );
  let arrIngr = [];
  let arrSrc = [];
  let cookSeeq = [];

  let props = {};
  try {
    // 메뉴 조회
    const result = await excuteQuery({
      query: `
      SELECT * 
        FROM menu_list
        WHERE id = ?
      `,
      values: [id],
    });
    // 레시피 조회
    const recipeResult = await excuteQuery({
      query: `
        SELECT *
        FROM recipe_list
        WHERE menuId = ?
      `,
      values: [id],
    });
    // 재료 조회
    const ingrResult = await excuteQuery({
      query: `
        SELECT *
        FROM ingredient_list
        WHERE menuId = ?
      `,
      values: [id],
    });
    // return result;
    arrIngr = _.filter(recipeResult, (o) => {
      return o.seqType === "재료손질";
    });
    arrSrc = _.filter(recipeResult, (o) => {
      return o.seqType === "양념준비";
    });
    cookSeeq = _.filter(recipeResult, (o) => {
      return o.seqType === "조리순서";
    });
    // arrSrc
    // cookSeeq
    console.log("props", ingrResult);
    _.set(props, "result.data.menuInfo", result[0]);
    _.set(props, "result.data.seqList.seqIngr", arrIngr);
    _.set(props, "result.data.seqList.seqSrc", arrSrc);
    _.set(props, "result.data.seqList.seqCook", cookSeeq);
    _.set(props, "result.data.ingrList", ingrResult);
  } catch (error) {
    console.log(error);
  }
  res.status(200).json(props);
}
