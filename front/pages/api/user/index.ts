import excuteQuery from "../../../database/connect/maria";

export async function getUser({}) {
  try {
    const result = await excuteQuery({
      query: `SELECT * FROM student`,
      values: [name],
    });
  } catch (err) {
    console.log(err);
  }
}
