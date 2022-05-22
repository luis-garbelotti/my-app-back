import { prisma } from '../database.js';
import { BriefingData } from '../services/briefingService.js';

async function create(projectId: number, briefing: BriefingData) {
  return await prisma.briefing.create({
    data: {
      projectId,
      question: briefing.question,
      answer: briefing.answer
    }
  });
}

async function findMany(projectId: number) {
  return await prisma.briefing.findMany({
    where: {
      projectId
    }
  });
}

export default {
  create,
  findMany,
};