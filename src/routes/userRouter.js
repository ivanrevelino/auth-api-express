import userController from "../controller/userController.js";
import express from "express"
import authToken from "../middleware/middleware.js";
// const express = require("express")
export const router = express.Router();

router.post("/users", authToken, userController.register)
router.get("/users", authToken, userController.findAll)
router.get("/users/:id", authToken, userController.findById)


export default router;