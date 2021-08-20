import { CarModel } from "@src/database/schemas/cars";

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
    const car = new CarModel({
      name,
      brand,
      color,
      dailyRate,
      manufactureYear,
      model,
      category,
      mileage,
    });

    await car.save();
  }
}

export { CreateCarUseCase };
