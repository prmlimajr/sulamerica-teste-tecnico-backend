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
  findByEmail(email: string): User {
    throw new AppError("Method not implemented.");
  }

  async findById(id: string): Promise<User> {
    const user = await UserModel.findOne({ id });

    return user;
  }

  async createSession({ name, email }: ICreateUserDTO): Promise<ISession> {
    let user = await UserModel.findOne({ email });

    if (user && user.name !== name) {
      await UserModel.findOneAndUpdate({ email }, { name }, { new: true });
    }

    if (!user) {
      const newUser = new UserModel({
        name,
        email,
      });

      await newUser.save();
    }

    user = await UserModel.findOne({ email });

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

  update(id: any, name: any): void {
    throw new AppError("Method not implemented.");
  }

  async list(): Promise<User[]> {
    const users = await UserModel.find().exec();

    return users;
  }
}

export { UsersRepository };
