import { pool } from "./connectPool";

export const connectToDB = async () => {
  try {
    return await pool.connect();
  } catch (err) {
    console.log(err);
  }
};
