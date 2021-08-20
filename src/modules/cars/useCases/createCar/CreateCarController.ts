import { Request, Response } from "express";

import { CreateCarUseCase } from "./CreateCarUseCase";

class CreateCarController {
  constructor(private createCarUseCase: CreateCarUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      brand,
      color,
      dailyRate,
      manufactureYear,
      model,
      category,
      mileage,
    } = request.body;

    const car = await this.createCarUseCase.execute({
      name,
      brand,
      color,
      dailyRate,
      manufactureYear,
      model,
      category,
      mileage,
    });

    return response.status(200).json(car);
  }
}

export { CreateCarController };
