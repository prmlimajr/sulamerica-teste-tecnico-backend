import { inject, injectable } from "tsyringe";

import { Car } from "../../infra/model/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";

interface IRequest {
  name: string;
  brand: string;
  color: string;
  dailyRate: number;
  manufactureYear: number;
  model: number;
  category: string;
  mileage: string;
  unavailableDates?: string[];
  photoUrl: string;
}

@injectable()
class CreateCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute({
    name,
    brand,
    color,
    dailyRate,
    manufactureYear,
    model,
    category,
    mileage,
    unavailableDates = [],
    photoUrl,
  }: IRequest): Promise<Car[]> {
    const car = await this.carsRepository.create({
      name,
      brand,
      color,
      dailyRate,
      manufactureYear,
      model,
      category,
      mileage,
      unavailableDates,
      photoUrl,
    });

    return car;
  }
}

export { CreateCarUseCase };
