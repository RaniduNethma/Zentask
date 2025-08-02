import express from 'express';
import { getCurrentUser, registerUser, updateUserPassword, updateUserProfile, userLogin } from '../controllers/userController.js';
import authMiddleware from '../middleware/auth.js';

const userRouter = express.Router();

//Public links
userRouter.post('/register', registerUser);
userRouter.post('/login', userLogin);

//Private links
userRouter.get('/me', authMiddleware, getCurrentUser);
userRouter.put('/profile', authMiddleware, updateUserProfile);
userRouter.put('/password', authMiddleware, updateUserPassword);

export default userRouter;