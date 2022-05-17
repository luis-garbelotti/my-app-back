import { jest } from "@jest/globals";
import userRepository from "../../src/repositories/userRepository.js";
import userService from "../../src/services/userService.js";
import { conflictError, unauthorizedError } from "../../src/utils/errorUtils.js";
import { userBodyFactory } from "../factories/userBodyFactory.js";
import bcrypt from 'bcrypt';

describe('Tests: User Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('should throw conflict error given duplicate email', () => {
    const user = userBodyFactory();

    jest.spyOn(userRepository, 'findByEmail').mockResolvedValue({
      id: 1,
      ...user
    });

    expect(async () => {
      await userService.signUp(user)
    }).rejects.toEqual(conflictError("Email must be unique"));
  });

  it('should throw unauthorized error given invalid credentials (email)', () => {
    const user = userBodyFactory();
    
    jest.spyOn(userRepository, 'findByEmail').mockResolvedValue(null)

    expect(async () => {
      await userService.signIn(user)
    }).rejects.toEqual(unauthorizedError("Invalid credentials"))
  });
  
  it('should throw unauthorized error given invalid credentials (password)', () => {
    const user = userBodyFactory();
    const userPasswordError = {
      ...user,
      password: '123'
    }
    
    jest.spyOn(userRepository, 'findByEmail').mockResolvedValue({
      id: 1,
      ...user
    });

    expect(async () => {
      await userService.signIn(userPasswordError)
    }).rejects.toEqual(unauthorizedError("Invalid credentials"))
  });
});