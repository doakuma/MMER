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
    cookFreq,
  } = req.body.params;
  console.log(
    "req==============================================================",
    req.body,
    imgSrc
  );

  //  (menuNm, mealType, menuDifct, menuReqTime, userInfo, menuTag)
  let props = {};
  try {
    const result = await excuteQuery({
      query: `
      INSERT
        menu_list
        (menuNm, mealType, menuDifct, menuReqTime,menuTag)
        VALUES(?, ?, ?, ?, ?)

      `,
      values: [menuNm, mealType, menuDifct, menuReqTime, menuTag],
    });
    // return result;
    // console.log("props", result);
    _.set(props, "result", result);
  } catch (error) {
    console.log(error);
  }
  res.status(200).json(props);
}
