import { PrismaUsersRepository } from "@/repositories/prisma-users-repositories";
import { RegisterUseCase } from "../register";

export function makeRegisterUseCase() {
  const prismaUsersRepository = new PrismaUsersRepository();
  const registerUseCase = new RegisterUseCase(prismaUsersRepository);

  return registerUseCase;
}
