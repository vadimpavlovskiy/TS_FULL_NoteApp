import express from "express";
import dotenv from "dotenv";
import { connectToDB } from "./db/connectToDB";
import usersRouter from "./routes/usersRoutes";
export const app = express();
app.use(express.json());

dotenv.config({ path: "../.env" });

const port = process.env.PORT;

connectToDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  return console.log(`Hello World! Server has been started on port ${port}`);
});

app.use("/users", usersRouter);
