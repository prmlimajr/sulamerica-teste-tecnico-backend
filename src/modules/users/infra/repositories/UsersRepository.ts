import { UserModel } from "@src/shared/infra/database/schemas/users";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from "../model/User";

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

  async update(id: string, name: string): Promise<void> {
    await UserModel.findOneAndUpdate({ id }, { name }, { new: true });
  }

  async list(): Promise<User[]> {
    const users = await UserModel.find().exec();

    return users;
  }
}

export { UsersRepository };
