import mysql from "serverless-mysql";
const db = mysql({
  config: {
    host: "127.0.0.1",
    port: "3306",
    database: "recipe",
    user: "root",
    password: "aqswdefr",
  },
});
export default async function excuteQuery({ query, values }) {
  try {
    const results = await db.query(query, values);
    await db.end();
    // return results;
    return JSON.parse(JSON.stringify(results));
  } catch (error) {
    return { error };
  }
}
