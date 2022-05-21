import { prisma } from '../database.js';
import { ClientData } from '../services/clientService.js';

async function create(client: ClientData, userId: number) {
  await prisma.client.create({
    data: client
  }); 
}

async function findCreatedClient(client: ClientData) {
  return await prisma.client.findFirst({
    where: {
      name: client.name,
      email: client.email,
      phone: client.phone
    }
  });
}

async function createRelation(clientId: number, userId: number) {
  await prisma.clientUser.create({
    data: {
      userId,
      clientId
    }
  });
}

async function findByUserId(id: number) {
  return await prisma.clientUser.findMany({
    where: {
      userId: id
    },
    include: {
      client: true
    }
  });
}

export default {
  create,
  findCreatedClient,
  createRelation,
  findByUserId,
};