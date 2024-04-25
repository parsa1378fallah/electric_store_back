import express from "express";
import controller from "./controller.js";

const router = express.Router();

router.get("/", controller.getUsers);
router.put("/:userId", controller.editUser);
export default router;
