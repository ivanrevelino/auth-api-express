import { DataTypes, Model, Sequelize } from "sequelize";
import { sequelize } from "../repository/repository.js";

export class User extends Model {
    

    getName () {
        return this.name;
    }

    getUserName() {
        return this.username;
    }
}

export class UserResponseDTO {
    constructor(name, username, role) {
        this.name = name;
        this.username = username;
        this.role = role;
    }
}

User.init({

    id: {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },

    name : {
        type : DataTypes.STRING,
        allowNull : false,
    },

    username : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true 
    },

    password : {
        type : DataTypes.STRING,
        allowNull : false
    },

    role : {
        type: DataTypes.ENUM("ADMIN", "USER"),
        allowNull : false,
        defaultValue : "USER"
    }
}, {
    sequelize,
    modelName: "User"
});

sequelize.sync();