import { Router } from 'express';
import clientController from '../controllers/clientController.js';
import { ensureAuthenticatedMiddleware } from '../middlewares/ensureAuthenticatedMiddleware.js';
import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware.js';
import clientSchema from '../schemas/clientSchema.js';

const clientRouter = Router();

clientRouter.post('/users/:userId/client', ensureAuthenticatedMiddleware, validateSchemaMiddleware(clientSchema), clientController.create);
clientRouter.get('/users/:userId/clients', ensureAuthenticatedMiddleware, clientController.findByUserId);

export default clientRouter;