import { User } from "@src/modules/users/infra/model/User";
import { AppError } from "@src/shared/errors/AppError";

import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { Car } from "../../infra/model/Car";
import { ICarsRepository } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];
  users: User[] = [];

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
    const car = new Car();

    Object.assign(car, {
      name,
      brand,
      color,
      dailyRate,
      manufactureYear,
      model,
      category,
      mileage,
    });

    this.cars.push(car);
  }

  async listAll(): Promise<Car[]> {
    return this.cars;
  }

  async findOne(id: string): Promise<Car[]> {
    const car = this.cars.filter((car) => car.id === id);

    return car;
  }

  async book(carId: string, userId: string, dates: string[]): Promise<void> {
    const [car] = this.cars.filter((car) => car.id === carId);
    const [user] = this.users.filter((user) => user.id === userId);

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

    this.cars.map((element) => {
      if (element.id === carId) {
        element = Object.assign(element, {
          unavailableDates: updatedDatesInCar,
        });
      }

      return element;
    });

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

    this.users.map((element) => {
      if (element.id === userId) {
        element = Object.assign(element, {
          carsRented: updatedUserCarsRented,
        });
      }

      return element;
    });
  }

  async uploadPhoto(car: Car): Promise<void> {
    this.cars.map((element) => {
      if (element.id === car.id) {
        element = car;
      }

      return element;
    });
  }
}

export { CarsRepositoryInMemory };
