import { Router } from "express";
import { usersLogin, usersRegister } from "../controllers/usersController";

const usersRouter = Router();

usersRouter.post("/login", usersLogin);
usersRouter.post("/register", usersRegister);

export default usersRouter;
