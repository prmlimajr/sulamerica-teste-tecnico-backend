import { UsersRepository } from "@src/modules/users/infra/repositories/UsersRepository";
import { AppError } from "@src/shared/errors/AppError";
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: id } = verify(
      token,
      "183ec22b3b4ce338172fb80fc289bcaa"
    ) as IPayload;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(id);

    if (!user) {
      throw new AppError("User not found", 401);
    }

    request.user = {
      id,
      name: user.name,
      email: user.email,
    };

    next();
  } catch (error) {
    throw new AppError("Invalid token", 401);
  }
}
