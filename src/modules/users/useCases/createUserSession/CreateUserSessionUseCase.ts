import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import * as yup from "yup";

import { AppError } from "../../../../shared/errors/AppError";
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
    const schema = yup.object().shape({
      name: yup.string().required().min(3),
      email: yup.string().email().required(),
    });

    if (!(await schema.isValid({ name, email }))) {
      throw new AppError("Validation error");
    }

    let user = await this.usersRepository.findByEmail(email);

    if (user && user.name !== name) {
      await this.usersRepository.update(user.id, name);
    }

    if (!user) {
      await this.usersRepository.createUser({ name, email });
    }

    user = await this.usersRepository.findByEmail(email);

    const token = sign(
      { id: user.id, name, email },
      "183ec22b3b4ce338172fb80fc289bcaa",
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return {
      user,
      token,
    };
  }
}

export { CreateUserSessionUseCase };
