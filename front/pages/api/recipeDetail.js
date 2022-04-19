// import { getLists } from "../../sql/recipe";
import excuteQuery from "../../db";

import _ from "lodash";

export default async function handler(req, res) {
  if (req.method !== "GET") res.status(405);
  const { id } = req.query;
  console.log(
    "req==============================================================",
    req.query
  );

  let props = {};
  try {
    const result = await excuteQuery({
      query: `
      SELECT * 
        FROM recipe_detail
        WHERE id = ?
      `,
      values: [id],
    });
    // return result;
    // console.log("props", result);
    _.set(props, "result.data", result[0]);
  } catch (error) {
    console.log(error);
  }
  res.status(200).json(props);
}
