import express from "express";
import controller from "./controller.js";

const router = express.Router();
router.get("/", controller.getProducts);
router.post("/", controller.addProduct);
router.put("/:productId", controller.editProduct);
router.delete("/:productId", controller.deleteProduct);

export default router;
