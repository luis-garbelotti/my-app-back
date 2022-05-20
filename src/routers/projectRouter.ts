import { Router } from 'express';
import projectController from '../controllers/projectController.js';
import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware.js';
import projectSchema from '../schemas/projectSchema.js';

const projectRouter = Router();

projectRouter.post('/project', validateSchemaMiddleware(projectSchema), projectController.create);

export default projectRouter;