import express from "express"
import { router } from "./routes/userRouter.js";
import { authRouter } from "./routes/authRouter.js";
import { PORT } from "./config/constants.js";
import dotenv from "dotenv/config"


// const express = require("express");
const app = express();
app.use(express.json())
app.use(router);
app.use(authRouter);

console.log(process.env.JWT_SECRET);

app.listen(PORT, () => {
    console.log(`Servidor rodando na url: http://localhost:${PORT}/`);
});