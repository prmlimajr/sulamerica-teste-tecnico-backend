import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindOneCarUseCase } from "./FindOneCarUseCase";

class FindOneCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findOneCarUseCase = container.resolve(FindOneCarUseCase);

    const car = await findOneCarUseCase.execute(id);

    return response.status(200).json(car);
  }
}

export { FindOneCarController };
