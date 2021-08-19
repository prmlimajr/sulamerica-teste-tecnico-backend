import { Car } from "../model/Car";
import { ICarsRepository } from "../repositories/ICarsRepository";

class ListCarsService {
  constructor(private carsRepository: ICarsRepository) {}

  execute(): Car[] {
    const cars = this.carsRepository.list();

    return cars;
  }
}

export { ListCarsService };
