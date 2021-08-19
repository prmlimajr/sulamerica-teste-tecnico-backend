import { User } from "@src/model/User";

import { ICreateUserDTO } from "./IUsersRepository";

class UsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  create({ name, email }: ICreateUserDTO): void {
    const user = new User();

    Object.assign(user, {
      name,
      email,
    });

    this.users.push(user);
  }

  findByEmail(email: string): User {
    const user = this.users.find((user) => user.email === email);

    return user;
  }
}

export { UsersRepository };
