import { Request, Response } from "express";

import { BookCarUseCase } from "./BookCarUseCase";

class BookCarController {
  constructor(private bookCarUseCase: BookCarUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id: carId } = request.params;
    const { id: userId } = request.user;
    const { dates } = request.body;

    await this.bookCarUseCase.execute(carId, userId, dates);

    return response.status(200).send();
  }
}

export { BookCarController };
