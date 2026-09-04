import { User } from "../models/User";

const bcrypt = require("bcrypt")

class UserService {

    async createUser(name, username, password) {
        
        if (!name || !password || !username) {
            throw new Error("Voce nao pode passar campos null")
        }

        const saltRounds = 10;
        const cryptedPassword = await bcrypt.hash(password, saltRounds);

        return await User.create({
            name,
            username, 
            password : cryptedPassword
        })

    }

    async findAll() {
        return await User.findAll()
    }
}