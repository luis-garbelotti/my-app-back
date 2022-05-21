import { Request, Response } from 'express';
import clientService from '../services/clientService.js';

async function create(req: Request, res: Response) {
  const client = req.body;
  const { userId } = req.params;

  await clientService.create(client, parseInt(userId));

  res.sendStatus(201);
}

async function findByUserId(req: Request, res: Response) {
  const { userId } = req.params;

  const clients = await clientService.findByUserId(parseInt(userId));
  
  res.send(clients).status(200);
}

export default {
  create,
  findByUserId,
};