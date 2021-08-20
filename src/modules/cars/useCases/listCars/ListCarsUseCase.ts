import { Car } from "../../model/Car";
import { CarsRepository } from "../../repositories/implementations/CarsRepository";

class ListCarsUseCase {
  async execute(): Promise<Car[]> {
    const carsRepository = new CarsRepository();

    const cars = await carsRepository.listAll();

    return cars;
  }
}

export { ListCarsUseCase };
