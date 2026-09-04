import jwt from 'jsonwebtoken'

function authToken(req, res, next) {

    const { username, password } = req.body;

    if (!username || !password) return res.status(400).json({
        message : "Bad Request", 
        code : 400
    })
    

}