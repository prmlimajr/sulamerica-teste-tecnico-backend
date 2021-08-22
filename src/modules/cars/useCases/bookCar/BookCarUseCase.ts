import { IUsersRepository } from "@src/modules/users/repositories/IUsersRepository";
import { AppError } from "@src/shared/errors/AppError";
import { inject, injectable } from "tsyringe";

import { ICarsRepository } from "../../repositories/ICarsRepository";

@injectable()
class BookCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository,

    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(carId: string, userId: string, dates: string[]): Promise<void> {
    const [car] = await this.carsRepository.findOne(carId);
    const user = await this.usersRepository.findById(userId);

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

    await this.carsRepository.book(
      car.id,
      updatedDatesInCar,
      user.id,
      updatedUserCarsRented
    );
  }
}

export { BookCarUseCase };
