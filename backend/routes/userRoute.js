import express from "express";
import { auth } from "../middlewares/auth.js";
import { getPublicCreations, getUserCreations, toggleLikeCreations } from "../controllers/userController.js";


const userRouter = express.Router();

userRouter.get('/get-user-creations', auth, getUserCreations)
userRouter.get('/get-published-creations', auth, getPublicCreations)
userRouter.post('/toggle-like-creations', auth, toggleLikeCreations)


export default userRouter;