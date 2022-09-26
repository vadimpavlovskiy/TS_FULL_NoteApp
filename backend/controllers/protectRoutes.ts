import { NextFunction, Request, Response } from "express";
import verifyToken from "../jwt/verifyToken";

export const protectRouter = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token: string = req.body.token;

  try {
    const verifiedToken = await verifyToken(token);

    if (verifiedToken) {
      next();
    } else {
      throw new Error("Token did not provided or invalid");
    }
  } catch (err) {
    return res.status(400).json({
      status: "rejected",
      error: err.message,
    });
  }
};
