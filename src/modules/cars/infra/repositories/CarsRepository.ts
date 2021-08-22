import { CarModel } from "@src/shared/infra/database/schemas/cars";
import { UserModel } from "@src/shared/infra/database/schemas/users";

import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import {
  ICarsRentedByUser,
  ICarsRepository,
} from "../../repositories/ICarsRepository";
import { Car } from "../model/Car";

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
    unavailableDates,
  }: ICreateCarDTO): Promise<Car[]> {
    const car = new CarModel({
      name,
      brand,
      color,
      dailyRate,
      manufactureYear,
      model,
      category,
      mileage,
      unavailableDates,
    });

    await car.save();

    const created = await this.findOne(car.id);

    return created;
  }

  async listAll(): Promise<Car[]> {
    const cars = await CarModel.find().exec();

    return cars;
  }

  async findOne(id: string): Promise<Car[]> {
    const car = await CarModel.find({ id }).exec();

    return car;
  }

  async book(
    carId: string,
    updatedDatesInCar: string[],
    userId: string,
    updatedUserCarsRented: ICarsRentedByUser[]
  ): Promise<void> {
    await CarModel.findOneAndUpdate(
      { id: carId },
      { unavailableDates: updatedDatesInCar },
      { new: true }
    ).exec();

    await UserModel.findOneAndUpdate(
      { id: userId },
      { carsRented: updatedUserCarsRented },
      { new: true }
    ).exec();
  }

  async uploadPhoto(car: Car): Promise<void> {
    await CarModel.findOneAndUpdate(
      { id: car.id },
      { photoUrl: car.photoUrl },
      { new: true }
    ).exec();
  }
}

export { CarsRepository };
