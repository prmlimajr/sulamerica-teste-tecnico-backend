import { UserModel } from "@src/database/schemas/users";
import { sign } from "jsonwebtoken";

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
