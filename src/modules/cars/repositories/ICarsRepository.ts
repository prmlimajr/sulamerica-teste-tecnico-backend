import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { Car } from "../infra/model/Car";

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
  book(carId: string, userId: string, dates: string[]): Promise<void>;
  uploadPhoto(car: Car): Promise<void>;
}

export { ICarsRepository };
