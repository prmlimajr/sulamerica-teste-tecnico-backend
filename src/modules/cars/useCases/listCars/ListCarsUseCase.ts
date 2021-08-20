import { CarModel } from "@src/database/schemas/cars";

import { Car } from "../../model/Car";

class ListCarsUseCase {
  async execute(): Promise<Car[]> {
    const cars = await CarModel.find().exec();

    return cars;
  }
}

export { ListCarsUseCase };
