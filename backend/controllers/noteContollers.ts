import { json, Request, Response } from "express";
import { app } from "../app";
import { pool } from "../db/connectPool";

export const getAllUsersNote = async (req: Request, res: Response) => {
  const email = app.locals.userToken.email;

  try {
    const notes = await pool.query(
      `SELECT * FROM notes WHERE userID = '${email}'`
    );
    res.status(200).json({
      status: "success",
      userNotes: notes.rows,
    });
  } catch (err) {
    res.status(404).json({
      status: "error",
      err,
    });
  }
};
