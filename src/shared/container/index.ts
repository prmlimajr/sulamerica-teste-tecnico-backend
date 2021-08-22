import { CarsRepository } from "@src/modules/cars/infra/repositories/CarsRepository";
import { ICarsRepository } from "@src/modules/cars/repositories/ICarsRepository";
import { UsersRepository } from "@src/modules/users/infra/repositories/UsersRepository";
import { IUsersRepository } from "@src/modules/users/repositories/IUsersRepository";
import { container } from "tsyringe";

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);
container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
