import { Request, Response } from "express";

import { CreateUserSessionUseCase } from "./CreateUserSessionUseCase";

class CreateUserSessionController {
  constructor(private createUserSessionUseCase: CreateUserSessionUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const token = await this.createUserSessionUseCase.execute({ name, email });

    return response.status(201).json(token);
  }
}

export { CreateUserSessionController };
