import { Request, Response } from 'express';
import clientService from '../services/clientService.js';

async function create(req: Request, res: Response) {
  const client = req.body;
  const { userId } = req.params;

  await clientService.create(client, parseInt(userId));

  res.sendStatus(201);
}

export default {
  create,
};