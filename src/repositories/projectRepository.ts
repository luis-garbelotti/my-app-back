import { prisma } from '../database.js';
import { ProjectData } from '../services/projectService.js';

async function create(project: ProjectData) {
  return prisma.project.create({
    data: project
  });
}

async function findCreatedProject(project: ProjectData) {
  return prisma.project.findFirst({
    where: {
      title: project.title,
      resume: project.resume,
      clientId: project.clientId,
    }
  });
}

async function createRelation(projectId: number, userId: number) {
  return prisma.projectUser.create({
    data: {
      projectId,
      userId,
    }
  });
}

export default {
  create,
  findCreatedProject,
  createRelation,
};