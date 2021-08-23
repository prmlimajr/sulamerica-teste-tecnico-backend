import { container } from "tsyringe";

import { CarsRepository } from "../../modules/cars/infra/repositories/CarsRepository";
import { ICarsRepository } from "../../modules/cars/repositories/ICarsRepository";
import { UsersRepository } from "../../modules/users/infra/repositories/UsersRepository";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);
container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
