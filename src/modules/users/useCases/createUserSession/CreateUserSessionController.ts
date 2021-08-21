import { Request, Response } from "express";
import * as yup from "yup";

import { CreateUserSessionUseCase } from "./CreateUserSessionUseCase";

class CreateUserSessionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const createUserSessionUseCase = new CreateUserSessionUseCase();

    const schema = yup.object().shape({
      name: yup.string().required().min(3),
      email: yup.string().email().required().min(3),
    });

    if (!schema.validate({ name, email })) {
      return response.status(400).json({ error: "Validation failed" });
    }

    const token = await createUserSessionUseCase.execute({ name, email });

    return response.status(201).json(token);
  }
}

export { CreateUserSessionController };
