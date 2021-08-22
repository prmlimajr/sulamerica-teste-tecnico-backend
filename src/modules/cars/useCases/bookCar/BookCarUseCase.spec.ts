import { CreateUserSessionUseCase } from "@src/modules/users/useCases/createUserSession/CreateUserSessionUseCase";
import { AppError } from "@src/shared/errors/AppError";

import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "../createCar/CreateCarUseCase";
import { BookCarUseCase } from "./BookCarUseCase";

let bookCarUseCase: BookCarUseCase;
let createCarUseCase: CreateCarUseCase;
let createUserSessionUseCase: CreateUserSessionUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let usersRepositoryInMemory: UsersRepositoryInMemory;

describe("Book a car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    bookCarUseCase = new BookCarUseCase(carsRepositoryInMemory);
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should not be able to book an unavailable car", async () => {
    expect(async () => {
      const car = {
        name: "Fusca",
        brand: "VolksWagen",
        color: "Azul",
        dailyRate: 999.99,
        manufactureYear: 1967,
        model: 1968,
        category: "Hatch",
        mileage: "100000",
        unavailableDates: ["2021-08-22"],
      };

      const [createdCar] = await createCarUseCase.execute({
        name: car.name,
        brand: car.brand,
        color: car.color,
        dailyRate: car.dailyRate,
        manufactureYear: car.manufactureYear,
        model: car.model,
        category: car.category,
        mileage: car.mileage,
        unavailableDates: car.unavailableDates,
      });

      const user = {
        name: "João",
        email: "joao@example.com",
      };

      const createdUser = await createUserSessionUseCase.execute({
        name: user.name,
        email: user.email,
      });

      await bookCarUseCase.execute(createdCar.id, createdUser.user.id, [
        "2021-08-22",
      ]);
    }).toBeInstanceOf(AppError);
  });

  it("should not be able to book a car if user already booked a car on these dates", async () => {});

  it("should not be able to book a car for longer than 30 days", async () => {});

  it("should be able to book a car if available", async () => {});
});
