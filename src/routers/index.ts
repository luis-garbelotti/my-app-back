import { Router } from 'express';
import userRouter from './userRouter.js';
import projectRouter from './projectRouter.js';
import clientRouter from './clientRouter.js';

const router = Router();

router.use(userRouter);
router.use(projectRouter);
router.use(clientRouter);

export default router;