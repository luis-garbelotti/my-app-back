import { User } from "@prisma/client";
import userRepository from "../repositories/userRepository.js";
import { conflictError, } from "../utils/errorUtils.js";
import { hashData } from "../utils/hashDataUtils.js";

export type CreateUserData = Omit<User, "id">;

async function signUp(createUserData: CreateUserData) {
  const existingUser = await userRepository.findByEmail(createUserData.email);
  if (existingUser) throw conflictError("Email must be unique");

  const hashedPassword = hashData(createUserData.password)

  await userRepository.insert({ ...createUserData, password: hashedPassword });
}

export default {
  signUp,
}