import { DB_NAME, DB_USERNAME, DB_SERVER, DB_PASSWORD } from "../config/constants.js"
import Sequelize from "sequelize";

//const Sequelize = require("sequelize")
export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_SERVER,
    dialect: "postgres",
    logging : false
});

sequelize.authenticate()
.then(() => {
    console.log(`${new Date().toISOString()} BANCO DE DADOS CONECTADO`)
})
.catch((err) => {
    console.log(`${new Date().toISOString()} ERRO CONECTANDO AO DB ${err}`)
})