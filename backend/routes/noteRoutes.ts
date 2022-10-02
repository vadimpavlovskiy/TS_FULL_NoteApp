import { Router } from "express";
import { getAllUsersNote } from "../controllers/noteContollers";
import { protectRouter } from "../controllers/protectRoutes";
import verifyToken from "../jwt/verifyToken";

const noteRouter = Router();

noteRouter.get("/", protectRouter, getAllUsersNote).post("/notes");

export default noteRouter;
