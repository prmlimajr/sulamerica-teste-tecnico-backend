import { sign } from "jsonwebtoken";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../infra/model/User";
import { ISession } from "../../infra/repositories/UsersRepository";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[];

  findByEmail(email: string): User {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<User> {
    const user = this.users.find((user) => user.id === id);

    return user;
  }

  async createSession({ name, email }: ICreateUserDTO): Promise<ISession> {
    let user = this.users.find((user) => user.email === email);

    if (user && user.name !== name) {
      const updateUsers = this.users.map((user) => {
        if (user.email === email) {
          user.name = name;
        }

        return user;
      });

      this.users = updateUsers;
    }

    if (!user) {
      user = new User();

      Object.assign(user, {
        name,
        email,
      });

      this.users.push(user);
    }

    user = this.users.find((user) => user.email === email);

    const token = sign(
      { id: user.id, name, email },
      "183ec22b3b4ce338172fb80fc289bcaa",
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return {
      user,
      token,
    };
  }

  update(id: any, name: any): void {
    throw new Error("Method not implemented.");
  }

  async list(): Promise<User[]> {
    const { users } = this;

    return users;
  }
}

export { UsersRepositoryInMemory };
