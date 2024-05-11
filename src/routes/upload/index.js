import express from "express";
import controller from "./controller.js";
import {
  uploadProfileImage,
  uploadCategoryImage,
  uploadProductImage,
} from "../../middlewares/uploadImage.js";
const router = express.Router();

router.post(
  "/profile-image/:userId",
  uploadProfileImage.single("file"),
  controller.uploadProfileImage
);
router.post(
  "/category-image/:categoryId",
  uploadCategoryImage.single("file"),
  controller.uploadCategoryImage
);
router.post(
  "/product-image/:productId",
  uploadProductImage.single("file"),
  controller.uploadProductImage
);
export default router;
