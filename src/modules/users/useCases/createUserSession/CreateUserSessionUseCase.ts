import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

interface IResponse {
  user: {
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
    const session = await this.usersRepository.createSession({ name, email });

    return session;
  }
}

export { CreateUserSessionUseCase };
