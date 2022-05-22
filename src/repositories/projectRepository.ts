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

async function findMany(userId: number) {
  return prisma.projectUser.findMany({
    where: {
      userId
    },
    include: {
      project: true
    }
  });
}

async function find(projectId: number) {
  return prisma.project.findFirst({
    where: {
      id: projectId
    },
    include: {
      client: true
    }
  });
}

async function updateDone(projectId: number) {
  return prisma.project.update({
    where: {
      id: projectId
    },
    data: {
      isDone: true
    }
  });
}

export default {
  create,
  findCreatedProject,
  createRelation,
  findMany,
  find,
  updateDone,
};