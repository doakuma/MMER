// import { getLists } from "../../sql/recipe";
import excuteQuery from "../../db";

import _ from "lodash";

export default async function handler(req, res) {
  // console.log("req", req);
  if (req.method !== "GET") res.status(405);

  let props = {};
  try {
    const result = await excuteQuery({
      query: `
      SELECT * 
        FROM recipe_list
        LIMIT 0, 10
      `,
      values: [],
    });
    // return result;
    // console.log("props", result);
    _.set(props, "result.list", result);
  } catch (error) {
    console.log(error);
  }
  res.status(200).json(props);
}
