import { IUsersRepository } from "@src/repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ name, email }: IRequest): void {
    const userAlreadyExists = this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    this.usersRepository.create({ name, email });
  }
}

export { CreateUserService };
