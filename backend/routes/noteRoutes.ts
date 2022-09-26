import { Router } from "express";
import { protectRouter } from "../controllers/protectRoutes";
import verifyToken from "../jwt/verifyToken";

const noteRouter = Router();

noteRouter.get("/", protectRouter).post("/notes");

export default noteRouter;
