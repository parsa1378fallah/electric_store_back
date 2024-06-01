import express from "express";
import controller from "./controller.js";

const router = express.Router();
router.get("/", controller.getShoppingCarts);
router.post("/", controller.addShoppingCart);
router.put("/:shoppingCartId", controller.editShoppingCart);
router.delete("/:shoppingCartId", controller.deleteShoppingCart);

export default router;
