import { Pool } from "pg";

export const pool = new Pool({
  host: "localhost",
  user: "developer",
  database: "users",
  password: "qwerty",
  port: parseInt(process.env.DB_PORT || "5432"),
});
