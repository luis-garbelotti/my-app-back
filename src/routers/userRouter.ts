import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import userController from "../controllers/userController.js";
import userSchema from "../schemas/userSchema.js";
import signInSchema from "../schemas/signInSchema.js";

const userRouter = Router();

userRouter.post('/signup', validateSchemaMiddleware(userSchema), userController.signUp)
userRouter.post('/signin', validateSchemaMiddleware(signInSchema), userController.signIn)

export default userRouter;