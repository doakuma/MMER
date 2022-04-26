// import { getLists } from "../../sql/recipe";
import excuteQuery from "../../../db";

import _ from "lodash";

export default async function handler(req, res) {
  if (req.method !== "POST") res.status(405);
  const {
    imgSrc,
    imgWidth,
    imgHeight,
    menuNm,
    mealType,
    lastCookDate,
    menuDifct,
    menuReqTime,
    userInfo,
    menuTag,
    cookFreq,
    ingrList,
    cookList,
  } = req.body.params;
  console.log(
    "req==============================================================",
    req.body,
    imgSrc
  );

  //  (menuNm, mealType, menuDifct, menuReqTime, userInfo, menuTag)
  let props = {};
  try {
    // regist menu
    const result = await excuteQuery({
      query: `
      INSERT
        menu_list
        (imgSrc, imgWidth, imgHeight, menuNm, mealType, lastCookDate, menuDifct, menuReqTime, userInfo, menuTag)
        VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)

      `,
      values: [
        imgSrc,
        imgWidth,
        imgHeight,
        menuNm,
        mealType,
        lastCookDate,
        menuDifct,
        menuReqTime,
        userInfo,
        menuTag,
      ],
    });

    // regist ingredient_list, recipe_list
    let _insertId = _.get(result, "insertId");
    let rsIngr, rsCook;

    if (_insertId) {
      await ingrList.map(async (row, idx) => {
        const rsIngr = await excuteQuery({
          query: `
            INSERT
              ingredient_list
              (menuId, ingrName, ingrType,ingrAmt)
            VALUES(?, ?, ?, ?)
          `,
          values: [_insertId, row.ingrName, row.ingrType, row.ingrAmt],
        });
      });
      console.log("rsIngr", _.get(result, "insertId"), rsIngr);
      await cookList.map(async (row, idx) => {
        console.log("cookList", row);
        const rsCook = await excuteQuery({
          query: `
            INSERT
              recipe_list
              (menuId, seqType, cookSeq,cookDesc,cookImg,cookImgAlt)
            VALUES(?, ?, ?, ?, ?, ?)
          `,
          values: [
            _insertId,
            row.seqType,
            row.cookSeq,
            row.cookDesc,
            row.cookImg,
            row.cookImgAlt,
          ],
        });
      });
      // console.log("rsCook", _.get(result, "insertId"), cookList);
    } else {
      throw new Error("Invalid insert");
    }

    // return result;
    _.set(props, "result", result);
  } catch (error) {
    console.log(error);
  }
  res.status(200).json(props);
}
