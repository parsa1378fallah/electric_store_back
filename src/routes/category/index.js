import express from "express";
import controller from "./controller.js";

const router = express.Router();
router.get("/", controller.getCategories);
router.post("/", controller.addCategory);
router.put("/:categoryId", controller.editCategory);
router.delete("/:categoryId", controller.deleteCategory);

export default router;
