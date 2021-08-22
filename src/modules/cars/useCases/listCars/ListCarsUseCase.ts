import { inject, injectable } from "tsyringe";

import { Car } from "../../infra/model/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";

@injectable()
class ListCarsUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute(): Promise<Car[]> {
    const cars = await this.carsRepository.listAll();

    return cars;
  }
}

export { ListCarsUseCase };
