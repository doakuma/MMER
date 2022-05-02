// import { getLists } from "../../sql/recipe";
import excuteQuery from "../../../db";

import _ from "lodash";

export default async function handler(req, res) {
  if (req.method !== "POST") res.status(405);
  const { menuInfo, ingrList, seqList } = req.body.inputs;
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
  } = menuInfo;

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

    const delIngr = await excuteQuery({
      query: `
        DELETE FROM
        ingredient_list
        WHERE menuId = ?
        `,
      values: [id],
    });
    let _delIdIngr = _.get(delIngr, "affectedRows");
    if (_delIdIngr > 0) {
      await ingrList.map(async (row, idx) => {
        const rsIngr = await excuteQuery({
          query: `
            INSERT
              ingredient_list
              (menuId, ingrName, ingrType,ingrAmt)
            VALUES(?, ?, ?, ?)
          `,
          values: [id, row.ingrName, row.ingrType, row.ingrAmt],
        });
      });
    }
    const delSq = await excuteQuery({
      query: `
        DELETE FROM
        recipe_list
        WHERE menuId = ?
        `,
      values: [id],
    });
    let _delIdSeq = _.get(delSq, "affectedRows");
    console.log("delSq", delSq);
    if (_delIdSeq > 0) {
      await seqList.map(async (row, idx) => {
        const rsCook = await excuteQuery({
          query: `
            INSERT
              recipe_list
              (menuId, seqType, cookSeq, cookDesc, cookImg, cookImgAlt)
            VALUES(?, ?, ?, ?, ?, ?)
          `,
          values: [
            id,
            row.seqType,
            row.cookSeq,
            row.cookDesc,
            row.cookImg,
            row.cookImgAlt,
          ],
        });
      });
    }
    _.set(props, "result", result);
  } catch (error) {
    console.log(error);
  }
  res.status(200).json(props);
}
