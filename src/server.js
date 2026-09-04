import express from "express"
import { router } from "./routes/userRouter.js";

// const express = require("express");
const app = express();
const port = 3000;

app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log(`Servidor rodando na url: http://localhost:${port}/`);
});