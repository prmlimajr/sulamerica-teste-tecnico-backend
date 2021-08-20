import { UsersRepository } from "../../repositories/implementations/UsersRepository";

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

class CreateUserSessionUseCase {
  async execute({ name, email }: IRequest): Promise<IResponse> {
    const usersRepository = new UsersRepository();

    const session = await usersRepository.createSession({ name, email });

    return session;
  }
}

export { CreateUserSessionUseCase };
