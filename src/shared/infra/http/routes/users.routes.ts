import { Router } from "express";

import { CreateUserSessionController } from "../../../../modules/users/useCases/createUserSession/CreateUserSessionController";
import { ListUsersController } from "../../../../modules/users/useCases/listUsers/ListUsersController";

const usersRoutes = Router();
const createUserSessionController = new CreateUserSessionController();
const listUsersController = new ListUsersController();

usersRoutes.post("/register", createUserSessionController.handle);

usersRoutes.get("/", listUsersController.handle);

export { usersRoutes };
