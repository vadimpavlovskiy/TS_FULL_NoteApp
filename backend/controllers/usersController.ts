import { Request, Response } from "express";
import { pool } from "../db/connectPool";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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

    if (user.rows[0].password !== password) {
      throw new Error("Wrong password. Please, try again");
    }

    return res.status(201).json({
      status: "success",
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

    const token = await getToken(email);

    const user = await pool.query(
      `INSERT INTO users (email, password, fullName ) VALUES ('${email}', '${encryptedPass}', '${fullName}') RETURNING *`
    );
    res.status(200).json({
      status: "success",
      accessToken: token,
      user: user.rows[0],
    });
  } catch (err) {
    res.status(400).json({
      status: "rejected",
      err: err.message,
    });
  }
};
