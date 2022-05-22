import { Router } from 'express';
import briefingController from '../controllers/briefingController.js';
import { ensureAuthenticatedMiddleware } from '../middlewares/ensureAuthenticatedMiddleware.js';
import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware.js';
import briefingSchema from '../schemas/briefingSchema.js';

const briefingRouter = Router();

briefingRouter.post('/projects/:projectId/briefing', 
  ensureAuthenticatedMiddleware, validateSchemaMiddleware(briefingSchema),
  briefingController.create );
briefingRouter.get('/projects/:projectId/briefing', 
  ensureAuthenticatedMiddleware, briefingController.findMany);

export default briefingRouter;