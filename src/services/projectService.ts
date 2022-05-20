import { Project } from '@prisma/client';
import projectRepository from '../repositories/projectRepository.js';

export type ProjectData = Omit<Project, 'id'>

async function create(project: ProjectData) {
  await projectRepository.create(project);

}

export default {
  create,
};