import { AppError } from "@src/shared/errors/AppError";
import { UserModel } from "@src/shared/infra/database/schemas/users";
import { sign } from "jsonwebtoken";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from "../model/User";

export interface ISession {
  user: User;
  token: string;
}

class UsersRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User> {
    const user = await UserModel.findOne({ email });

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await UserModel.findOne({ id });

    return user;
  }

  async createUser({ name, email }: ICreateUserDTO): Promise<User> {
    const newUser = new UserModel({
      name,
      email,
    });

    await newUser.save();

    return newUser;
  }

  async createSession({ name, email }: ICreateUserDTO): Promise<ISession> {
    const user = await this.findByEmail(email);

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

  async update(id: string, name: string): Promise<void> {
    await UserModel.findOneAndUpdate({ id }, { name }, { new: true });
  }

  async list(): Promise<User[]> {
    const users = await UserModel.find().exec();

    return users;
  }
}

export { UsersRepository };
