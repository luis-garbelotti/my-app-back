import { Router } from 'express';
import clientController from '../controllers/clientController.js';
import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware.js';
import clientSchema from '../schemas/clientSchema.js';

const clientRouter = Router();

clientRouter.post('/users/:userId/client', validateSchemaMiddleware(clientSchema), clientController.create);

export default clientRouter;