import { Request, Response } from "express";

import { CreateCarUseCase } from "./CreateCarUseCase";

class CreateCarController {
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

    const createCarUseCase = new CreateCarUseCase();

    const car = await createCarUseCase.execute({
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
