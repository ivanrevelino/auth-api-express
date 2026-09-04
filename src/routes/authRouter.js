import authController from "../controller/authController.js";
import express from "express"

export const authRouter = express.Router();

authRouter.post("/login", authController.login);
authRouter.post("/register", authController.register)