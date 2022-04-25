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
    ingrList,
    cookList,
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
        menu_list
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

    await ingrList.map(async (row, idx) => {
      const rsIngr = await excuteQuery({
        query: `
        UPDATE
            ingredient_list
            ingrName = ?, 
            ingrType = ?,
            ingrAmt = ?
          WHERE menuId = ?
        `,
        values: [id, row.ingrName, row.ingrType, row.ingrAmt],
      });
    });
    // await cookList.map(async (row, idx) => {
    //   const rsCook = await excuteQuery({
    //     query: `
    //     UPDATE
    //         recipe_list
    //         seqType = ?,
    //         cookSeq = ?,
    //         cookDesc = ?,
    //         cookImg = ?,
    //         cookImgAlt = ?
    //       WHERE menuId = ?
    //     `,
    //     values: [
    //       id,
    //       row.seqType,
    //       row.cookSeq,
    //       row.cookDesc,
    //       row.cookImg,
    //       row.cookImgAlt,
    //     ],
    //   });
    // });
    // return result;
    // console.log("props", result);
    _.set(props, "result", result);
  } catch (error) {
    console.log(error);
  }
  res.status(200).json(props);
}
