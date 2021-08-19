import { createUserSessionController } from "@src/modules/users/useCases/createUserSession";
import { listUsersController } from "@src/modules/users/useCases/listUsers";
import { Router } from "express";

const usersRoutes = Router();

usersRoutes.post("/register", (request, response) => {
  return createUserSessionController.handle(request, response);
});

usersRoutes.get("/", (request, response) => {
  return listUsersController.handle(request, response);
});

export { usersRoutes };
