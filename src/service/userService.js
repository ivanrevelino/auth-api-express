import { User, UserResponseDTO } from "../models/User.js";
import bcrypt from "bcrypt"


class UserService {

    async createUser(name, username, password, role) {
        
        if (!name || !password || !username || !role) {
            throw new Error("Voce nao pode passar campos null")
        }

        const saltRounds = 10;
        const cryptedPassword = await bcrypt.hash(password, saltRounds);

        const { savedName, savedUsername, savedRole} = await User.create({
            name,
            username, 
            password : cryptedPassword,
            role,
        });

        return new UserResponseDTO(savedName, savedUsername, savedRole);

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
}

export default new UserService();