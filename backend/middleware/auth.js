import jwt from 'jsonwebtoken';
import User from '../model/userModel.js';

const JWT_SECRET = process.env.JWT_SECRET || 'your jwt secret is here';

export default async function authMiddleware(req, res, next){
    
    //Extract the bearer token from an authorization header
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('bearer ')){
        return res.status(401).json({
            success: false,
            message: "Not authorized, Token missing."
        });
    }
    const token = authHeader.split(' ')[1];

    //Verify and attach user object
    try {
        const payload = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(payload.id).select('-password');
        
        if(!user){
            return res.status(401).json({
                success: false,
                message: "User not found"
            });
        }
        req.user = user;
        next();
    }
    catch (error) {
        console.log(error);
        res.status(401).json({
            success: false,
            message: "Token invalid or expired"
        });
    }
}
