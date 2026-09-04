import userService from "../service/userService.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


class AuthController {

    login = async (req, res) => {

        const { username, password } = req.body;
        const user = await userService.findByUsername(username);

        if (!user) {
            return res.status(404).json({
                message : "User not found",
                code : 404
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.getPassword());

        if(!isPasswordValid) {
            return res.status(401).json({
                message : "Credencias Invalidas",
                code : 401
            });
        }

        const payload = {
            userId : user.getId(),
            username : user.getUserName(),
            role : user.getRole()
        };

        const secret = process.env.JWT_SECRET;

        const token = jwt.sign(payload, secret, {expiresIn : "1h"})
        res.status(200).json({
            message : "Login realizado com sucesso",
            token : token
        });
    }

    register = async (req, res) => {
        try {
            const { name, username, password} = req.body;
            const user = await userService.createUser(name, username, password)

            return res.status(201).json({
                message : "Usuario criado",
                user : user
            }) 
        } catch (erro){
            return res.status(400).json({
                erro : erro.message
            })
        }
    }
}

export default new AuthController();