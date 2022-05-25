// import { getLists } from "../../sql/recipe";
import excuteQuery from "../../../db";

import _ from "lodash";

export default async function handler(req, res) {
  if (req.method !== "POST") res.status(405);
  let _reqBody = JSON.parse(_.get(req, "body.body"));
  const { userMail, userPw } = _reqBody;
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
        WHERE userMail = ? and userPw = ?
      `,
      values: [userMail, userPw],
    });
    // console.log("user=====================", result, userMail, userPw);
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
  } catch (error) {
    console.log(error);
  }
  res.status(200).json(props);
}
