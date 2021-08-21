import { Request, Response } from "express";

import { FindOneCarUseCase } from "./FindOneCarUseCase";

class FindOneCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findOneCarUseCase = new FindOneCarUseCase();

    const car = await findOneCarUseCase.execute(id);

    return response.status(200).json(car);
  }
}

export { FindOneCarController };
