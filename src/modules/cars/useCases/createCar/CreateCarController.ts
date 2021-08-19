import { Request, Response } from "express";

import { CreateCarUseCase } from "./CreateCarUseCase";

class CreateCarController {
  constructor(private createCarUseCase: CreateCarUseCase) {}

  handle(request: Request, response: Response): Response {
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

    this.createCarUseCase.execute({
      name,
      brand,
      color,
      dailyRate,
      manufactureYear,
      model,
      category,
      mileage,
    });

    return response.status(200).send();
  }
}

export { CreateCarController };
