import { Car } from "../../model/Car";
import { CarsRepository } from "../../repositories/implementations/CarsRepository";

class FindOneCarUseCase {
  async execute(id: string): Promise<Car> {
    const carsRepository = new CarsRepository();

    const car = await carsRepository.findOne(id);

    return car;
  }
}

export { FindOneCarUseCase };
