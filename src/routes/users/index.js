import express from "express";
import controller from "./controller.js";

const router = express.Router();

router.get("/", controller.getUsers);
export default router;
