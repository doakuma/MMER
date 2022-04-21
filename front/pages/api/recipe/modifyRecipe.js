// import { getLists } from "../../sql/recipe";
import excuteQuery from "../../../db";

import _ from "lodash";

export default async function handler(req, res) {
  if (req.method !== "POST") res.status(405);
  const {
    imgSrc,
    imgWidth,
    imgeHeight,
    menuNm,
    mealType,
    lastCookDate,
    menuDifct,
    menuReqTime,
    userInfo,
    menuTag,
    id,
  } = req.body.inputs;
  console.log(
    "req==============================================================",
    req.body.inputs,
    id
  );

  let props = {};
  try {
    const result = await excuteQuery({
      query: `
      UPDATE
        recipe_list
      SET 
         imgSrc = ?, 
         imgWidth = ?, 
         imgHeight = ?, 
         menuNm = ?, 
         mealType = ?, 
         lastCookDate = ?, 
         menuDifct = ?, 
         menuReqTime = ?, 
         userInfo = ?, 
         menuTag = ?
      WHERE id = ?

      `,
      values: [
        imgSrc,
        imgWidth,
        imgeHeight,
        menuNm,
        mealType,
        lastCookDate,
        menuDifct,
        menuReqTime,
        userInfo,
        menuTag,
        id,
      ],
    });
    // return result;
    // console.log("props", result);
    _.set(props, "result", result);
  } catch (error) {
    console.log(error);
  }
  res.status(200).json(props);
}
