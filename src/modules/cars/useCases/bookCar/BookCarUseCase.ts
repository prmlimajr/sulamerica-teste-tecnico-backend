import { inject, injectable } from "tsyringe";

import { ICarsRepository } from "../../repositories/ICarsRepository";

@injectable()
class BookCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute(carId: string, userId: string, dates: string[]): Promise<void> {
    await this.carsRepository.book(carId, userId, dates);
  }
}

export { BookCarUseCase };
