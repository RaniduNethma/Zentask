import express from 'express';
import { getCurrentUser, registerUser, updateUserPassword, updateUserProfile, userLogin } from '../controllers/userController';

const userRouter = express.Router();

//Public links
userRouter.post('/register', registerUser);
userRouter.post('/login', userLogin);

//Private links
userRouter.get('/me', getCurrentUser);
userRouter.put('/profile', updateUserProfile);
userRouter.put('/password', updateUserPassword);
