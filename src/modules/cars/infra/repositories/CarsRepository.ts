import { AppError } from "@src/shared/errors/AppError";
import { CarModel } from "@src/shared/infra/database/schemas/cars";
import { UserModel } from "@src/shared/infra/database/schemas/users";

import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { ICarsRepository } from "../../repositories/ICarsRepository";
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

    if (dates.length > 30) {
      throw new AppError("Can't book a car for over 30 days.");
    }

    const updatedDatesInCar = [...car.unavailableDates, ...dates];

    await CarModel.findOneAndUpdate(
      { id: carId },
      { unavailableDates: updatedDatesInCar },
      { new: true }
    ).exec();

    function updateList() {
      const carAlreadyRentedBefore = user.carsRented.map((rent) => {
        if (rent.car.id === carId) {
          rent.dates = [...rent.dates, ...dates];
        }
        return rent;
      });

      return carAlreadyRentedBefore.some((rented) => rented.car.id === carId)
        ? carAlreadyRentedBefore
        : [...user.carsRented, { car, dates }];
    }

    const updatedUserCarsRented =
      user.carsRented.length > 0 ? updateList() : [{ car, dates }];

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
