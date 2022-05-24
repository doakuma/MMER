// import { getLists } from "../../sql/recipe";
import excuteQuery from "../../../db";

import _ from "lodash";

export default async function handler(req, res) {
  if (req.method !== "GET") res.status(405);
  const { id } = req.query;
  // console.log(
  //   "req==============================================================",
  //   req.query,
  //   id
  // );
  let arrInfo = [];
  let arrSns = [];
  let arrTag = [];
  let arrPriends = [];

  let props = {};
  try {
    // 메뉴 조회
    const result = await excuteQuery({
      query: `
      SELECT * 
        FROM user_list
        WHERE userId = ?
      `,
      values: [id],
    });
    // console.log("user=====================", result);
    // // 레시피 조회
    // const recipeResult = await excuteQuery({
    //   query: `
    //     SELECT *
    //     FROM recipe_list
    //     WHERE menuId = ?
    //   `,
    //   values: [id],
    // });
    // // 재료 조회
    // const ingrResult = await excuteQuery({
    //   query: `
    //     SELECT *
    //     FROM ingredient_list
    //     WHERE menuId = ?
    //   `,
    //   values: [id],
    // });
    // arrSrc
    // cookSeeq
    // console.log("props", ingrResult);
    _.set(props, "result.data.userInfo", result[0]);
    // _.set(props, "result.data.seqList", recipeResult);
    // _.set(props, "result.data.seqList.seqIngr", arrIngr);
    // _.set(props, "result.data.seqList.seqSrc", arrSrc);
    // _.set(props, "result.data.seqList.seqCook", cookSeeq);
    // _.set(props, "result.data.ingrList", ingrResult);
  } catch (error) {
    console.log(error);
  }
  res.status(200).json(props);
}
