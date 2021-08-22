import { Request, Response } from "express";
import { container } from "tsyringe";

import { BookCarUseCase } from "./BookCarUseCase";

class BookCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: carId } = request.params;
    const { id: userId } = request.user;
    const { dates } = request.body;

    const bookCarUseCase = container.resolve(BookCarUseCase);

    await bookCarUseCase.execute(carId, userId, dates);

    return response.status(200).send();
  }
}

export { BookCarController };
