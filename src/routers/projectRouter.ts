import { Router } from 'express';
import projectController from '../controllers/projectController.js';
import { ensureAuthenticatedMiddleware } from '../middlewares/ensureAuthenticatedMiddleware.js';
import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware.js';
import projectSchema from '../schemas/projectSchema.js';

const projectRouter = Router();

projectRouter.post('/users/:userId/project', ensureAuthenticatedMiddleware, validateSchemaMiddleware(projectSchema), projectController.create);
projectRouter.get('/users/:userId/projects', ensureAuthenticatedMiddleware, projectController.findMany);
projectRouter.get('/users/:userId/projects/:projectId', ensureAuthenticatedMiddleware, projectController.find);
projectRouter.patch('/users/:userId/projects/:projectId/done', ensureAuthenticatedMiddleware, projectController.updateDone);

export default projectRouter;