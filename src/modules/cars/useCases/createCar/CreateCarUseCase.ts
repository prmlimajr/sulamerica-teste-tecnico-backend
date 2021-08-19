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
}

class CreateCarUseCase {
  constructor(private carsRepository: ICarsRepository) {}

  execute({
    name,
    brand,
    color,
    dailyRate,
    manufactureYear,
    model,
    category,
    mileage,
  }: IRequest): void {
    this.carsRepository.create({
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
