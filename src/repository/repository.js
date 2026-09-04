import { DB_NAME, DB_USERNAME, DB_SERVER, DB_PASSWORD } from "../config/constants.js"
import Sequelize from "sequelize";


//const Sequelize = require("sequelize")
export const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_SERVER,
    dialect: "postgres"
});

sequelize.authenticate()
.then(() => {
    console.log(`${new Date().toISOString()} BANCO DE DADOS CONECTADO`)
})
.catch((err) => {
    console.log(`${new Date().toISOString()} ERRO CONECTANDO AO DB ${err}`)
})