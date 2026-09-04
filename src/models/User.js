import { DataTypes, Model, Sequelize } from "sequelize";
import { sequelize } from "../repository/repository.js";

class User extends Model {
    

    getName () {
        return this.name;
    }

    getUserName() {
        return this.username;
    }
}

User.init({
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
        allowNull : false
    }
}, {
    sequelize,
    modelName: "User"
});

sequelize.sync();