import { Router } from 'express';
import projectController from '../controllers/projectController.js';
import { ensureAuthenticatedMiddleware } from '../middlewares/ensureAuthenticatedMiddleware.js';
import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware.js';
import projectSchema from '../schemas/projectSchema.js';

const projectRouter = Router();

projectRouter.post('/users/:userId/project', ensureAuthenticatedMiddleware, validateSchemaMiddleware(projectSchema), projectController.create);

export default projectRouter;