import { Request, Response } from 'express';
import projectService from '../services/projectService.js';

async function create(req: Request, res: Response) {
  const project = req.body;
  const { userId } = req.params;

  await projectService.create(project, parseInt(userId));

  res.sendStatus(201);
}

export default {
  create,
};