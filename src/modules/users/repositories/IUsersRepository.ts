import { User } from "../model/User";
import { ICreateUserDTO } from "./dtos/ICreateUserDTO";
import { ISession } from "./implementations/UsersRepository";

interface IUsersRepository {
  findByEmail(email: string): User;
  findById(id: string): Promise<User>;
  createSession({ name, email }: ICreateUserDTO): Promise<ISession>;
  update(id, name): void;
  list(): Promise<User[]>;
}

export { IUsersRepository };
