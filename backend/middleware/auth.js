import jwt from 'jsonwebtoken';
import user from './model/userModel.js';

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
}