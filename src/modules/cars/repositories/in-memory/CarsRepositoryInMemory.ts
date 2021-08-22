import { User } from "../../../users/infra/model/User";
import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { Car } from "../../infra/model/Car";
import { ICarsRentedByUser, ICarsRepository } from "../ICarsRepository";

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
    unavailableDates = [],
  }: ICreateCarDTO): Promise<Car[]> {
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
      unavailableDates,
    });

    this.cars.push(car);

    return [car];
  }

  async listAll(): Promise<Car[]> {
    return this.cars;
  }

  async findOne(id: string): Promise<Car[]> {
    const car = this.cars.filter((car) => car.id === id);

    return car;
  }

  async book(
    carId: string,
    updatedDatesInCar: string[],
    userId: string,
    updatedUserCarsRented: ICarsRentedByUser[]
  ): Promise<void> {
    this.cars.map((element) => {
      if (element.id === carId) {
        element = Object.assign(element, {
          unavailableDates: updatedDatesInCar,
        });
      }

      return element;
    });

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
