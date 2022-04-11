// import crypto from "crypto";
// import { v4 as uuidv4 } from "uuid";
import excuteQuery from "../../db";
// import moment from "moment";

// export async function createUser({ email, password }) {
//     const salt = crypto.randomBytes(16).toString('hex');
//     const hash = crypto
//         .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
//         .toString('hex');
//     const user = {
//         id: uuidv4(),
//         createdAt: moment().format( 'YYYY-MM-DD HH:mm:ss'),
//         email,
//         hash,
//         salt,
//     };

//     try {
//         const result = await excuteQuery({
//             query: 'INSERT INTO users (id, createdAt, email, hash, salt) VALUES(?, ?, ?, ?, ?)',
//             values: [user.id, user.createdAt.toString(), user.email, user.hash, user.salt],
//         });
//         console.log( result );
//     } catch ( error ) {
//         console.log( error );
//     }

//     return user;
// }

async function findUser({ name }) {
  try {
    const result = await excuteQuery({
      query: "SELECT * FROM student WHERE name = ?",
      values: [name],
    });
    return result[0];
  } catch (error) {
    console.log(error);
  }
}

export default async function handler(req, res) {
  let name = req.query.name;
  res.status(200).json(await findUser({ name }));
}
