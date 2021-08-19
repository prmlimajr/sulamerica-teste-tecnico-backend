import { User } from "../model/User";
import { IUsersRepository } from "../repositories/IUsersRepository";

class ListUsersService {
  constructor(private usersRepository: IUsersRepository) {}

  execute(): User[] {
    const users = this.usersRepository.list();

    return users;
  }
}

export { ListUsersService };
