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
  } = req.body.params;
  console.log(
    "req==============================================================",
    req.body,
    imgSrc
  );

  let props = {};
  try {
    const result = await excuteQuery({
      query: `
      INSERT
        recipe_list
        (imgSrc, imgWidth, imgHeight, menuNm, mealType, lastCookDate, menuDifct, menuReqTime, userInfo, menuTag)
        VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)

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
