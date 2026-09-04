// pelo amor de Deus NAO tire esse import
import dotenv from "dotenv/config"

import express from "express"
import { router } from "./routes/userRouter.js";
import { authRouter } from "./routes/authRouter.js";
import { PORT } from "./config/constants.js";

// const express = require("express");
const app = express();
app.use(express.json())
app.use(router);
app.use(authRouter);

app.listen(PORT, () => {
    console.log(`Servidor rodando na url: http://localhost:${PORT}/`);
});