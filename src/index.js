import express from "express";
import authRouter from "./routes/auth/index.js";
import userRouter from "./routes/users/index.js";
const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
export default router;
