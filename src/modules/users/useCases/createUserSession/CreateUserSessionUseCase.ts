import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

interface IResponse {
  user: {
    id?: string;
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class CreateUserSessionUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ name, email }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (user && user.name !== name) {
      await this.usersRepository.update(user.id, name);
    }

    if (!user) {
      await this.usersRepository.createUser({ name, email });
    }

    const session = await this.usersRepository.createSession({ name, email });

    return session;
  }
}

export { CreateUserSessionUseCase };
