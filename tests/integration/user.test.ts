import app from '../../src/app.js';
import supertest from 'supertest';
import { userBodyFactory } from '../factories/userBodyFactory.js';
import { userFactory } from '../factories/userFactory.js';
import { prisma } from '../../src/database.js';

async function truncateUsers() {
  await prisma.$executeRaw`TRUNCATE TABLE users CASCADE`;
}

async function disconnect() {
  await prisma.$disconnect();
}

describe('POST /signup', () => {
  beforeEach(truncateUsers);
  afterAll(disconnect);

  it('should return status 201 and persist data given a valid user schema', async () => {
    const user = userBodyFactory();

    const createdUser = await supertest(app).post('/signup').send(user);
    const selectCreatedUser = await prisma.user.findFirst({
      where: {
        email: user.email
      }
    });

    expect(createdUser.status).toEqual(201);
    expect(selectCreatedUser.email).toEqual(user.email);
  });

  it('should return status 422 given invalid user schema (name)', async () => {
    const user = userBodyFactory();
    const userWithoutName = {
      ...user,
      name: ''
    };

    const response = await supertest(app).post('/signup').send(userWithoutName);

    expect(response.status).toEqual(422);
  });

  it('should return status 422 given invalid user schema (email)', async () => {
    const user = userBodyFactory();
    const userWithoutEmail = {
      ...user,
      email: ''
    };

    const response = await supertest(app).post('/signup').send(userWithoutEmail);

    expect(response.status).toEqual(422);
  });

  it('should return status 422 given invalid user schema (password)', async () => {
    const user = userBodyFactory();
    const userWithoutPassword = {
      ...user,
      password: ''
    };

    const response = await supertest(app).post('/signup').send(userWithoutPassword);

    expect(response.status).toEqual(422);
  });
});

describe('POST /signin', () => {
  beforeEach(truncateUsers);
  afterAll(disconnect);

  it('should return status 200 given valid credentials', async () => {
    const user = userBodyFactory();
    await userFactory(user);

    const loginResponse = await supertest(app).post('/signin').send({ email: user.email, password: user.password });

    expect(loginResponse.status).toEqual(200);
  });

  it('should return status 422 given invalid login user schema (email)', async () => {
    const user = userBodyFactory();
    await userFactory(user);

    const loginResponse = await supertest(app).post('/signin').send({ email: '', password: user.password });

    expect(loginResponse.status).toEqual(422);
  });

  it('should return status 422 given invalid login user schemas (password)', async () => {
    const user = userBodyFactory();
    await userFactory(user);

    const loginResponse = await supertest(app).post('/signin').send({ email: user.email, password: '' });

    expect(loginResponse.status).toEqual(422);
  });

});