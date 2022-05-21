import { Request, Response } from 'express';
import projectService from '../services/projectService.js';

async function create(req: Request, res: Response) {
  const project = req.body;
  const { userId } = req.params;
  
  await projectService.create(project, parseInt(userId));
  
  res.sendStatus(201);
}

async function findMany(req: Request, res: Response) {
  const { userId } = req.params;
  
  const projects = await projectService.findMany(parseInt(userId));

  res.send(projects).status(200);
}

export default {
  create,
  findMany
};