import { Request, Response } from 'express';
import projectService from '../services/projectService.js';

async function create(req: Request, res: Response) {
  const project = req.body;

  await projectService.create(project);

  res.sendStatus(201);
}

export default {
  create,
};