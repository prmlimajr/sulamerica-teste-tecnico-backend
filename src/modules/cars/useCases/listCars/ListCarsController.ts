import { Request, Response } from "express";

import { ListCarsUseCase } from "./ListCarsUseCase";

class ListCarsController {
  constructor(private listCarsUseCase: ListCarsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const cars = await this.listCarsUseCase.execute();

    return response.status(200).json(cars);
  }
}

export { ListCarsController };
