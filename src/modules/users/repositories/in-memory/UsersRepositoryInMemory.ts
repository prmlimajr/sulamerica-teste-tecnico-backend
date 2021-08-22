import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../infra/model/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email);

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = this.users.find((user) => user.id === id);

    return user;
  }

  async createUser({ name, email }: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, {
      name,
      email,
    });

    this.users.push(user);

    return user;
  }

  async update(id: string, name: string): Promise<void> {
    const updatedList = this.users.map((user) => {
      if (user.id === id) {
        user.name = name;
      }

      return user;
    });

    this.users = updatedList;
  }

  async list(): Promise<User[]> {
    const { users } = this;

    return users;
  }
}

export { UsersRepositoryInMemory };
