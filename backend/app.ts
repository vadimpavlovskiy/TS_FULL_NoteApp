import express from "express";
import dotenv from "dotenv";
import { connectToDB } from "./db/connectToDB";
const app = express();

dotenv.config({ path: "../.env" });

const port = process.env.PORT;

connectToDB();

app.listen(port, () => {
  return console.log(`Hello World! Server has been started on port ${port}`);
});
