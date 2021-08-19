import { Car } from "../model/Car";

interface ICreateCarDTO {
  name: string;
  brand: string;
  color: string;
  dailyRate: number;
  manufactureYear: number;
  model: number;
  category: string;
  mileage: string;
}

interface IListCarsDTO {
  name?: string;
  brand?: string;
  minDailyRate?: number;
  maxDailyRate?: number;
  minManufactureYear?: number;
  maxManufactureYear?: number;
}

interface ICarsRepository {
  create({
    name,
    brand,
    color,
    dailyRate,
    manufactureYear,
    model,
    category,
    mileage,
  }: ICreateCarDTO): void;
  list(): Car[];
  book(id: string, dates: string[]): void;
}

export { ICarsRepository, ICreateCarDTO, IListCarsDTO };
