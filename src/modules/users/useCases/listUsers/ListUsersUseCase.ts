import { UserModel } from "@src/database/schemas/users";

import { User } from "../../model/User";

class ListUsersUseCase {
  async execute(): Promise<User[]> {
    const users = await UserModel.find().exec();

    return users;
  }
}

export { ListUsersUseCase };
