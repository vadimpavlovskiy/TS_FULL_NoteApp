import { Request, Response } from "express";
import { pool } from "../db/connectPool";
import bcrypt from "bcrypt";
import getToken from "../jwt/signToken";

export const usersLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await pool.query(
      `SELECT * FROM users WHERE email = '${email}'`
    );

    if (user.rows.length === 0) {
      throw new Error("Wrong credentials. Please, try again");
    }

    const decryptedPassword = await bcrypt.compare(
      password,
      user.rows[0].password
    );

    if (!decryptedPassword) {
      throw new Error("Wrong password. Please, try again");
    }

    const token = await getToken(user.rows[0].email);

    if (token) {
      res.cookie("userToken", token, { httpOnly: true });
    }
    return res.status(200).json({
      status: "success",
      accessToken: token,
      data: user.rows[0],
    });
  } catch (err) {
    return res.status(401).json({
      status: "rejected",
      error: err.message,
    });
  }
};
export const usersRegister = async (req: Request, res: Response) => {
  const { email, password, fullName } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const encryptedPass = await bcrypt.hash(password, salt);

    const userExist = await pool.query(
      `SELECT * FROM users WHERE email = '${email}'`
    );

    if (userExist.rows.length !== 0) {
      throw new Error("User is already exist. Please, provide a valid email");
    }

    const user = await pool.query(
      `INSERT INTO users (email, password, fullName) VALUES ('${email}', '${encryptedPass}', '${fullName}') ON CONFLICT(email) DO NOTHING RETURNING * `
    );

    const token = await getToken(user.rows[0].email);

    if (token) {
      res.cookie("userToken", token, { httpOnly: true });
    }

    return res.status(201).json({
      status: "success",
      accessToken: token,
      user: user.rows[0],
    });
  } catch (err) {
    return res.status(400).json({
      status: "rejected",
      err: err.message,
    });
  }
};
