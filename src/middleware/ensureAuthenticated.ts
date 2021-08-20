import { UsersRepository } from "@src/modules/users/repositories/implementations/UsersRepository";
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
    throw new Error("Token missing");
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
      throw new Error("User not found");
    }

    request.user = {
      id,
    };

    next();
  } catch (error) {
    throw new Error("Invalid token");
  }
}
