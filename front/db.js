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

var Singleton = (function () {
  // instance 비공개 변수 정의
  var instance;

  function Database() {
    const database = mysql({
      config: {
        // host: process.env.NEXT_PUBLIC_DATABASE_HOST,
        // port: Number(process.env.NEXT_PUBLIC_DATABASE_PORT),
        // database: process.env.NEXT_PUBLIC_DATABASE_NAME,
        // user: process.env.NEXT_PUBLIC_DATABASE_USER,
        // password: process.env.NEXT_PUBLIC_DATABASE_PASSWORD
        host: "127.0.0.1",
        port: "3306",
        database: "recipe",
        user: "root",
        password: "aqswdefr",
      },
    });
    return database;
  }

  // public 메서드인 getInstance 를 정의한 객체
  // 이 메서드를 통해 비공개된 메서드와 변수에 접근 가능 (closure)
  return {
    getInstance: function () {
      if (!instance) {
        // console.info('>>>new dataBase!!')
        instance = Database();
      } else {
        // console.info('>>>ready dataBase!!')
      }
      return instance;
    },
  };
})();

export default async function excuteQuery({ query, values }) {
  try {
    var database = Singleton.getInstance();
    const results = await database.query(query, values);
    await database.end();
    // const results = await db.query(query, values);
    // await db.end();
    // return results;
    return JSON.parse(JSON.stringify(results));
  } catch (error) {
    return { error };
  }
}
