import { inject, injectable } from "tsyringe";

import { Car } from "../../infra/model/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";

@injectable()
class FindOneCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute(id: string): Promise<Car[]> {
    const car = await this.carsRepository.findOne(id);

    return car;
  }
}

export { FindOneCarUseCase };
