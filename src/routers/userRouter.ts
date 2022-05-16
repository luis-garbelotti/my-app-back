import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import userController from "../controllers/userController.js";
import userSchema from "../schemas/userSchema.js";

const userRouter = Router();

userRouter.post('/signup', validateSchemaMiddleware(userSchema), userController.signUp)

export default userRouter;