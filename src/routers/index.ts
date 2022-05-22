import { Router } from 'express';
import userRouter from './userRouter.js';
import projectRouter from './projectRouter.js';
import clientRouter from './clientRouter.js';
import briefingRouter from './briefingRouter.js';

const router = Router();

router.use(userRouter);
router.use(projectRouter);
router.use(clientRouter);
router.use(briefingRouter);

export default router;