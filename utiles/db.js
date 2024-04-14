import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "@sequelize/core";

const { DB_HOST, DB_PASS, DB_USER, DB_NAME } = process.env;

const sequelize = await new Sequelize({
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  logging: false,
  dialect: "mysql",
});

try {
  await sequelize.authenticate();
} catch (e) {
  console.log(e.message);
}

export default sequelize;
