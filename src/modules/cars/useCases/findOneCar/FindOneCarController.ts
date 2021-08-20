import { Request, Response } from "express";

import { FindOneCarUseCase } from "./FindOneCarUseCase";

class FindOneCarController {
  constructor(private findOneCarUseCase: FindOneCarUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const car = await this.findOneCarUseCase.execute(id);

    return response.status(200).json(car);
  }
}

export { FindOneCarController };
