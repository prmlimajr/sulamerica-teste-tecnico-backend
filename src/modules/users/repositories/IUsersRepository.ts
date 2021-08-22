import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../infra/model/User";
import { ISession } from "../infra/repositories/UsersRepository";

interface IUsersRepository {
  findByEmail(email: string): User;
  findById(id: string): Promise<User>;
  createSession({ name, email }: ICreateUserDTO): Promise<ISession>;
  update(id, name): void;
  list(): Promise<User[]>;
}

export { IUsersRepository };
