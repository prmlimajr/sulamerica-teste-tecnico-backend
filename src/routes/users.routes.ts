import { UsersRepository } from "@src/modules/users/repositories/UsersRepository";
import { CreateUserSessionService } from "@src/modules/users/services/CreateUserSessionService";
import { ListUsersService } from "@src/modules/users/services/ListUsersService";
import { Router } from "express";

const usersRoutes = Router();
const usersRepository = new UsersRepository();

usersRoutes.post("/register", (req, res) => {
  const { name, email } = req.body;

  const createUserSessionService = new CreateUserSessionService(
    usersRepository
  );

  const token = createUserSessionService.execute({ name, email });

  return res.status(201).json(token);
});

usersRoutes.get("/", (req, res) => {
  const users = new ListUsersService(usersRepository).execute();

  return res.status(200).json(users);
});

export { usersRoutes };
