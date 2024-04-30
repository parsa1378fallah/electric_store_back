import express from "express";
import controller from "./controller.js";
import { upload } from "../../middlewares/uploadImage.js";
const router = express.Router();

router.post(
  "/profile-image/:userId",
  upload.single("file"),
  controller.uploadProfileImage
);
export default router;
