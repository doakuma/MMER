import excuteQuery from "../db";

export async function getLists() {
  try {
    const result = await excuteQuery({
      query: `
      SELECT * 
        FROM recipe_list
      `,
      values: [],
    });
    return result;
  } catch (error) {
    console.log(error);
  }
}
export async function getDetail(id) {
  try {
    const result = await excuteQuery({
      query: `SELECT * FROM recipe_detail WHERE id=?`,
      values: [id],
    });
    return result[0];
  } catch (error) {
    console.log(error);
  }
}
