import express from "express";

const app = express();
const port = 3001;

app.listen(port, () => {
  return console.log("Hello World!. Server has been started on port " + port);
});
