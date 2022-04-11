import { getLists } from "../../sql/recipe";

export default async function handler(req, res) {
  res.status(200).json(await getLists());
}
