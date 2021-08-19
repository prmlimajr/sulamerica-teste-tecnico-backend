import { Request, Response } from "express";

import { CreateUserSessionUseCase } from "./CreateUserSessionUseCase";

class CreateUserSessionController {
  constructor(private createUserSessionUseCase: CreateUserSessionUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;

    const token = this.createUserSessionUseCase.execute({ name, email });

    return response.status(201).json(token);
  }
}

export { CreateUserSessionController };
