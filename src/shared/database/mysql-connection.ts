import mysql from "mysql2/promise";
import { env } from "../config/env";

// Conexiones a mysql
export const pool = mysql.createPool({
  host: env.HOST,
  user: env.USER,
  password: env.PASSWORD,
  database: env.DATABASE,
  port: env.DB_PORT
});
