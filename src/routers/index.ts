import { Router } from 'express';
import userRouter from './userRouter.js';
import projectRouter from './projectRouter.js';

const router = Router();

router.use(userRouter);
router.use(projectRouter);

export default router;