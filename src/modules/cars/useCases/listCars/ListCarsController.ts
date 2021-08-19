import { Request, Response } from "express";

import { ListCarsUseCase } from "./ListCarsUseCase";

class ListCarsController {
  constructor(private listCarsUseCase: ListCarsUseCase) {}

  handle(request: Request, response: Response): Response {
    const cars = this.listCarsUseCase.execute();

    return response.status(200).json(cars);
  }
}

export { ListCarsController };
