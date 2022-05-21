import { Client } from '@prisma/client';
import clientRepository from '../repositories/clientRepository.js';
import { notFoundError } from '../utils/errorUtils.js';

export type ClientData = Omit<Client, 'id'>

async function create(client: ClientData, userId: number) {
  await clientRepository.create(client, userId);

  await createRelation(client, userId);
}

async function createRelation(client: ClientData, userId: number) {
  const createdClient = await clientRepository.findCreatedClient(client);

  if(!createdClient) {
    throw notFoundError('Client not found.');
  }

  await clientRepository.createRelation(createdClient.id, userId); 
}

async function findByUserId(id: number) {
  return await clientRepository.findByUserId(id);
}

export default {
  create,
  findByUserId,
};