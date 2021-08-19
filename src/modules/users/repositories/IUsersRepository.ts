import { User } from "../model/User";

interface ICreateUserDTO {
  name: string;
  email: string;
}

interface IUsersRepository {
  findByEmail(email: string): User;
  create({ name, email }: ICreateUserDTO): void;
  update(id, name): void;
  list(): User[];
}

export { IUsersRepository, ICreateUserDTO };
