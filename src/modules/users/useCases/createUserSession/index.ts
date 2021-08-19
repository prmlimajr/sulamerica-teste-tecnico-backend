import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { CreateUserSessionController } from "./CreateUserSessionController";
import { CreateUserSessionUseCase } from "./CreateUserSessionUseCase";

const usersRepository = UsersRepository.getInstance();
const createUserSessionUseCase = new CreateUserSessionUseCase(usersRepository);
const createUserSessionController = new CreateUserSessionController(
  createUserSessionUseCase
);

export { createUserSessionController };
