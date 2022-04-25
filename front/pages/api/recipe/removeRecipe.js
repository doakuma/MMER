// import { getLists } from "../../sql/recipe";
import excuteQuery from "../../../db";

import _ from "lodash";

export default async function handler(req, res) {
  if (req.method !== "POST") res.status(405);
  const { id } = req.body.params;
  console.log(
    "req==============================================================",
    req.body.params
  );

  let props = {};
  try {
    const result = await excuteQuery({
      query: `
      DELETE FROM menu_list
        WHERE id = ?
      `,
      values: [id],
    });
    const resIngr = await excuteQuery({
      query: `
      DELETE FROM ingredient_list
        WHERE menuId = ?
      `,
      values: [id],
    });
    const resCook = await excuteQuery({
      query: `
      DELETE FROM recipe_list
        WHERE menuId = ?
      `,
      values: [id],
    });
    // return result;
    // console.log("props", result);
    _.set(props, "result.data", result);
  } catch (error) {
    console.log(error);
  }
  res.status(200).json(props);
}
