import { User } from "@src/model/User";

interface ICreateUserDTO {
  name: string;
  email: string;
}

interface IUsersRepository {
  findByEmail(email: string): User;
  create({ name, email }: ICreateUserDTO): void;
}

export { IUsersRepository, ICreateUserDTO };
