import { Project } from '@prisma/client';
import projectRepository from '../repositories/projectRepository.js';
import { notFoundError } from '../utils/errorUtils.js';

export type ProjectData = Omit<Project, 'id'>

async function create(project: ProjectData, userId: number) {
  await projectRepository.create(project);

  await createRelation(project, userId);
}

async function createRelation(project: ProjectData, userId: number) {
  const createdProject = await projectRepository.findCreatedProject(project);

  if (!createdProject) {
    throw notFoundError('Project not found.');
  }

  await projectRepository.createRelation(createdProject.id, userId); 
}

async function findMany(userId: number) {
  const projects = await projectRepository.findMany(userId);

  if(!projects) {
    throw notFoundError('Project not found.');
  }

  return projects;
}

async function find(projectId: number) {
  const project = await projectRepository.find(projectId);

  if (!project) {
    throw notFoundError('Project not found');
  }

  return project;
}

async function updateDone(projectId: number) {
  return await projectRepository.updateDone(projectId);
}

export default {
  create,
  findMany,
  find,
  updateDone,
};