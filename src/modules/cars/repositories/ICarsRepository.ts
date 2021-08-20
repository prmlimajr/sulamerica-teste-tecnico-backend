import { Car } from "../model/Car";
import { ICreateCarDTO } from "./dtos/ICreateCarDTO";

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
  }: ICreateCarDTO): Promise<void>;
  listAll(): Promise<Car[]>;
  findOne(id: string): Promise<Car[]>;
  book(carId: string, userId: string, dates: string[]): void;
  uploadPhoto(id: string, file: File): void;
}

export { ICarsRepository };
