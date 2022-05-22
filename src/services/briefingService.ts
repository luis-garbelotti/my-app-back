import { Briefing } from '@prisma/client';
import briefingRepository from '../repositories/briefingRepository.js';
import { notFoundError } from '../utils/errorUtils.js';

export type BriefingData = Omit<Briefing, 'id' | 'projectId'>

async function create(projectId: number, briefing: BriefingData) {
  return await briefingRepository.create(projectId, briefing);
}

async function findMany(projectId: number) {
  const briefings = await briefingRepository.findMany(projectId);

  if(!briefings) {
    throw notFoundError('Não existem briefings para esse projeto');
  }

  return briefings;
}

export default {
  create,
  findMany,
};