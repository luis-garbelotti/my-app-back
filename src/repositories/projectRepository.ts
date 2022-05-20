import { prisma } from '../database.js';
import { ProjectData } from '../services/projectService.js';

async function create(project: ProjectData) {
  return prisma.project.create({
    data: project
  });
}

export default {
  create,
};