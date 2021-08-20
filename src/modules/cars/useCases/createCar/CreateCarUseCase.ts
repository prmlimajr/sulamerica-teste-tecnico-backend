import { CarsRepository } from "../../repositories/implementations/CarsRepository";

interface IRequest {
  name: string;
  brand: string;
  color: string;
  dailyRate: number;
  manufactureYear: number;
  model: number;
  category: string;
  mileage: string;
}

class CreateCarUseCase {
  async execute({
    name,
    brand,
    color,
    dailyRate,
    manufactureYear,
    model,
    category,
    mileage,
  }: IRequest): Promise<void> {
    const carsRepository = new CarsRepository();

    await carsRepository.create({
      name,
      brand,
      color,
      dailyRate,
      manufactureYear,
      model,
      category,
      mileage,
    });
  }
}

export { CreateCarUseCase };
