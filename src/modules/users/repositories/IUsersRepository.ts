import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../infra/model/User";
import { ISession } from "../infra/repositories/UsersRepository";

interface IUsersRepository {
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  createUser({ name, email }: ICreateUserDTO): Promise<User>;
  createSession({ name, email }: ICreateUserDTO): Promise<ISession>;
  update(id: string, name: string): Promise<void>;
  list(): Promise<User[]>;
}

export { IUsersRepository };
