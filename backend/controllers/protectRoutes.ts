import { NextFunction, Request, Response } from "express";
import { app } from "../app";
import verifyToken from "../jwt/verifyToken";

export const protectRouter = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token: string = req.cookies.userToken;
  try {
    const verifiedToken = await verifyToken(token);

    if (verifiedToken) {
      app.locals.userToken = verifiedToken;
      next();
    } else {
      throw new Error("Token did not provided or invalid");
    }
  } catch (err) {
    return res.status(403).json({
      status: "rejected",
      error: err.message,
    });
  }
};
