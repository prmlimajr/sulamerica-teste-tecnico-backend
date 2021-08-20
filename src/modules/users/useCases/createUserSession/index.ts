import { CreateUserSessionController } from "./CreateUserSessionController";
import { CreateUserSessionUseCase } from "./CreateUserSessionUseCase";

const createUserSessionUseCase = new CreateUserSessionUseCase();
const createUserSessionController = new CreateUserSessionController(
  createUserSessionUseCase
);

export { createUserSessionController };
