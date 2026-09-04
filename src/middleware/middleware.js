import jwt from 'jsonwebtoken'

export async function authToken(req, res, next) {

    const authHeader = req.headers['authorization'];
    const token = authHeader.split(" ")[1];

    if(!token) {
        return res.status(401).json({
            message : "Unauthorized. No token provided",
            code : 401
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({
            message: 'Forbidden - Invalid or expired token',
        });
    }

}