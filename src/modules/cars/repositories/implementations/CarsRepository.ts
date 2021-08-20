import { CarModel } from "@src/database/schemas/cars";
import { UserModel } from "@src/database/schemas/users";
import { User } from "@src/modules/users/model/User";
import { AppError } from "@src/shared/errors/AppError";

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

  async findOne(id: string): Promise<Car[]> {
    const car = await CarModel.find({ id }).exec();

    return car;
  }

  async book(carId: string, userId: string, dates: string[]): Promise<void> {
    const [car] = await CarModel.find({ id: carId }).exec();
    const [user] = await UserModel.find({ id: userId }).exec();

    const carIsUnavailable = car.unavailableDates.some((date) =>
      dates.includes(date)
    );

    if (carIsUnavailable) {
      throw new AppError("Car is unavailable.");
    }

    // verificar se usuário já tem algum carro alugado nesse período
    const [userAlreadyBookedSomeCar] = user.carsRented.filter((rented) => {
      return rented.dates.some((date) => dates.includes(date));
    });

    if (userAlreadyBookedSomeCar) {
      throw new AppError("User already booked a car in this date");
    }

    const [userAlreadyBookedThisCar] = user.carsRented.filter(
      (rented) => rented.car.id === carId
    );

    const userAlreadyBookedThisCarOnThisDate = userAlreadyBookedThisCar
      ? userAlreadyBookedThisCar.dates.some((date) => dates.includes(date))
      : false;

    if (userAlreadyBookedThisCarOnThisDate) {
      throw new AppError("You already booked this car.");
    }

    if (dates.length > 30) {
      throw new AppError("Can't book a car for over 30 days.");
    }

    const updatedDatesInCar = [...car.unavailableDates, ...dates];

    await CarModel.findOneAndUpdate(
      { id: carId },
      { unavailableDates: updatedDatesInCar },
      { new: true }
    ).exec();

    const updatedUserCarsRented =
      user.carsRented.length > 0
        ? user.carsRented.map((rent) => {
            if (rent.car.id === carId) {
              rent.dates = [...rent.dates, ...dates];
            }
            return rent;
          })
        : [{ car, dates }];

    await UserModel.findOneAndUpdate(
      { id: userId },
      { carsRented: updatedUserCarsRented },
      { new: true }
    ).exec();
  }

  uploadPhoto(id: string, file: File): void {
    throw new AppError("Method not implemented.");
  }
}

export { CarsRepository };
