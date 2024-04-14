import express from "express";
import authRouter from "./routes/auth/index.js";
const router = express.Router();

router.use("/auth", authRouter);

export default router;
