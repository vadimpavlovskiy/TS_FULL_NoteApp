import { Request, Response } from "express";
import { pool } from "../db/connectPool";

export const getAllUsersNote = async (req: Request, res: Response) => {
  const usersId = req.body;
  const notes = await pool.query(
    `SELECT * FROM notes WHERE userID = ${usersId}`
  );
};
