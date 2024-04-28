import express from "express";
import authRouter from "./routes/auth/index.js";
import userRouter from "./routes/users/index.js";
import uploadRouter from "./routes/upload/index.js";
const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/upload", uploadRouter);
export default router;
