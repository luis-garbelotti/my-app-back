import { Request, Response } from 'express';
import briefingService from '../services/briefingService.js';
 
async function create(req: Request, res: Response) {
  const { projectId } = req.params;
  const briefing = req.body;

  await briefingService.create(parseInt(projectId), briefing);

  res.sendStatus(201);
}

async function findMany(req: Request, res: Response) {
  const { projectId } = req.params;

  const briefings = await briefingService.findMany(parseInt(projectId));

  res.send(briefings).status(200);
} 

export default {
  create,
  findMany,
};