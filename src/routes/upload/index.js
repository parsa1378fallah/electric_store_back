import express from "express";
import controller from "./controller.js";
import {
  uploadProfileImage,
  uploadCategoryImage,
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
export default router;
