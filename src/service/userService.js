import { User, UserResponseDTO } from "../models/User.js";
import bcrypt from "bcrypt"


class UserService {

    async createUser(name, username, password) {
        
        if (!name || !password || !username) {
            throw new Error("Voce nao pode passar campos null")
        }

        const saltRounds = 10;
        const cryptedPassword = await bcrypt.hash(password, saltRounds);

        const { savedName, savedUsername, role} = await User.create({
            name,
            username, 
            password : cryptedPassword
        });

        return new UserResponseDTO(savedName, savedUsername, role);

    }

    async findAll() {
        const list = await User.findAll();

        return list.map((user) => {
            return new UserResponseDTO(user.name, user.username, user.role)
        })
    }

    async findById(id) {
        const { name, username, role } =  await User.findByPk(id);
        return new UserResponseDTO(name, username, role);
    }

    async findByUsername(username) {
        return await User.findByUsername(username);
    }

    async delete(id) {
        return await User.destroy(
            {
                where : {id}
            }
        )
    }
}

export default new UserService();