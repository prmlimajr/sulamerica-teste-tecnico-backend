import { CarsRepository } from "../../repositories/implementations/CarsRepository";

class BookCarUseCase {
  async execute(carId: string, userId: string, dates: string[]): Promise<void> {
    const carsRepository = new CarsRepository();

    await carsRepository.book(carId, userId, dates);
  }
}

export { BookCarUseCase };
