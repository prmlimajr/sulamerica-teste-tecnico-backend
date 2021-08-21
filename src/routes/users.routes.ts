import { CreateUserSessionController } from "@src/modules/users/useCases/createUserSession/CreateUserSessionController";
import { ListUsersController } from "@src/modules/users/useCases/listUsers/ListUsersController";
import { Router } from "express";

const usersRoutes = Router();
const createUserSessionController = new CreateUserSessionController();
const listUsersController = new ListUsersController();

usersRoutes.post("/register", createUserSessionController.handle);

usersRoutes.get("/", listUsersController.handle);

export { usersRoutes };
