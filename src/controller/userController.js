import userService from "../service/userService.js"

class UserController {

    register = async (req, res) => {
        try {
            const { name, username, password, role } = req.body;
            const user = await userService.createUser(name, username, password, role)

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

    findAll = async (req, res) => {
        try {
            const list = await userService.findAll();
            res.status(200).json({
                list : list
            })
        } catch (error) {
            return res.status(400).json({
                error : error
            })
        }
    }

    findById = async (req, res) => {
        try {
            const userId = req.params.id;
            const user = await userService.findById(userId);
            
            return res.status(200).json({
                user : user
            })

        } catch (error) {
            return res.status(404).json({
                error : error,
                code : 404,
                message : "User not found"
            });
        }
    }
}

export default new UserController();