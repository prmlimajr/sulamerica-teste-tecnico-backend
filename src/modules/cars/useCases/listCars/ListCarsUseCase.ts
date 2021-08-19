import { Car } from "../../model/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";

class ListCarsUseCase {
  constructor(private carsRepository: ICarsRepository) {}

  execute(): Car[] {
    return this.carsRepository.list();
  }
}

export { ListCarsUseCase };
