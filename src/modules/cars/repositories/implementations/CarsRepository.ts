import { CarModel } from "@src/database/schemas/cars";

import { Car } from "../../model/Car";
import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { ICarsRepository } from "../ICarsRepository";

class CarsRepository implements ICarsRepository {
  async create({
    name,
    brand,
    color,
    dailyRate,
    manufactureYear,
    model,
    category,
    mileage,
  }: ICreateCarDTO): Promise<void> {
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

  async listAll(): Promise<Car[]> {
    const cars = await CarModel.find().exec();

    return cars;
  }

  async findOne(id: string): Promise<Car> {
    const car = await CarModel.find({ id }).exec();

    return car;
  }

  book(id: string, dates: string[]): void {
    throw new Error("Method not implemented.");
  }

  uploadPhoto(id: string, file: File): void {
    throw new Error("Method not implemented.");
  }
}

export { CarsRepository };
