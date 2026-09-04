import userController from "../controller/userController.js";
import express from "express"

// const express = require("express")
export const router = express.Router();

router.post("/users", userController.register)
router.get("/users", userController.findAll)
router.get("/users/:id", userController.findById)


export default router;