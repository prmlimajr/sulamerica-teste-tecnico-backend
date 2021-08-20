import { ListUsersController } from "./ListUsersController";
import { ListUsersUseCase } from "./ListUsersUseCase";

const listUsersUseCase = new ListUsersUseCase();
const listUsersController = new ListUsersController(listUsersUseCase);

export { listUsersController };
