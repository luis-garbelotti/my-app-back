import { faker } from '@faker-js/faker';
import { CreateUserData } from '../../src/services/userService';

export function userBodyFactory(): CreateUserData {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };
}