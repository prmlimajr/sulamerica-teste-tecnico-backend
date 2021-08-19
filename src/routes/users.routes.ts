import { UsersRepository } from "@src/repositories/UsersRepository";
import { CreateUserService } from "@src/services/CreateUserService";
import { Router } from "express";

const usersRoutes = Router();
const usersRepository = new UsersRepository();

usersRoutes.post("/register", (req, res) => {
  const { name, email } = req.body;

  const createUserService = new CreateUserService(usersRepository);

  createUserService.execute({ name, email });

  return res.status(201).send();
});

export { usersRoutes };
