import { sign } from "jsonwebtoken";

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

class CreateUserSessionUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ name, email }: IRequest): IResponse {
    const user = this.usersRepository.findByEmail(email);

    if (user && user.name !== name) {
      this.usersRepository.update(user.id, name);
    }

    if (!user) {
      this.usersRepository.create({ name, email });
    }

    const token = sign({}, "183ec22b3b4ce338172fb80fc289bcaa", {
      expiresIn: "1d",
    });

    return {
      user,
      token,
    };
  }
}

export { CreateUserSessionUseCase };
