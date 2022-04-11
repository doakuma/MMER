import { getLists, getDetail } from "../../sql/recipe";

export default async function handler(req, res) {
  let id = req.query.id;
  res.status(200).json(await getDetail({ id }));
}
