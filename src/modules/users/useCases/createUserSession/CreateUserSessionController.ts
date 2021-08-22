import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserSessionUseCase } from "./CreateUserSessionUseCase";

class CreateUserSessionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const createUserSessionUseCase = container.resolve(
      CreateUserSessionUseCase
    );

    const token = await createUserSessionUseCase.execute({ name, email });

    return response.status(201).json(token);
  }
}

export { CreateUserSessionController };
