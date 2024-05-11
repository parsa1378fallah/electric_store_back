import express from "express";
import cors from "cors";
import Router from "./src/index.js";
import dotenv from "dotenv";
dotenv.config();
import sequelize from "./utiles/db.js";
import { setRelations } from "./src/models/relations.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api", Router);

const PORT = process.env.PORT || 3000;
setRelations();
await sequelize.sync();
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
