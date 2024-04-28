import express from "express";
import controller from "./controller.js";

const router = express.Router();

router.post("/profile-image", controller.uploadProfileImage);
export default router;
