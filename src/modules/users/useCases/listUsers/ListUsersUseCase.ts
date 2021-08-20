import { User } from "../../model/User";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

class ListUsersUseCase {
  async execute(): Promise<User[]> {
    const usersRepository = new UsersRepository();

    const users = await usersRepository.list();

    return users;
  }
}

export { ListUsersUseCase };
