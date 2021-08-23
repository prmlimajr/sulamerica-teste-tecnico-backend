import { AppError } from "../../../../shared/errors/AppError";
import { UsersRepositoryInMemory } from "../../../users/repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserSessionUseCase } from "../../../users/useCases/createUserSession/CreateUserSessionUseCase";
import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "../createCar/CreateCarUseCase";
import { FindOneCarUseCase } from "../findOneCar/FindOneCarUseCase";
import { BookCarUseCase } from "./BookCarUseCase";

let bookCarUseCase: BookCarUseCase;
let createCarUseCase: CreateCarUseCase;
let findOneCarUseCase: FindOneCarUseCase;
let createUserSessionUseCase: CreateUserSessionUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let usersRepositoryInMemory: UsersRepositoryInMemory;

describe("Book a car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    bookCarUseCase = new BookCarUseCase(
      carsRepositoryInMemory,
      usersRepositoryInMemory
    );
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
    findOneCarUseCase = new FindOneCarUseCase(carsRepositoryInMemory);
    createUserSessionUseCase = new CreateUserSessionUseCase(
      usersRepositoryInMemory
    );
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
        photoUrl: "teste",
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
        photoUrl: car.photoUrl,
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
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to book a car if user already booked a car on these dates", async () => {
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
        unavailableDates: [],
        photoUrl: "teste",
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
        photoUrl: car.photoUrl,
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

      await bookCarUseCase.execute(createdCar.id, createdUser.user.id, [
        "2021-08-22",
      ]);
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to book a car for longer than 30 days", async () => {
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
        unavailableDates: [],
        photoUrl: "teste",
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
        photoUrl: car.photoUrl,
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
        "2021-08-01",
        "2021-08-02",
        "2021-08-03",
        "2021-08-04",
        "2021-08-05",
        "2021-08-06",
        "2021-08-07",
        "2021-08-08",
        "2021-08-09",
        "2021-08-10",
        "2021-08-11",
        "2021-08-12",
        "2021-08-13",
        "2021-08-14",
        "2021-08-15",
        "2021-08-16",
        "2021-08-17",
        "2021-08-18",
        "2021-08-19",
        "2021-08-20",
        "2021-08-21",
        "2021-08-22",
        "2021-08-23",
        "2021-08-24",
        "2021-08-25",
        "2021-08-26",
        "2021-08-27",
        "2021-08-28",
        "2021-08-29",
        "2021-08-30",
        "2021-08-31",
      ]);
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to book a car if available", async () => {
    const mockCar = {
      name: "Fusca",
      brand: "VolksWagen",
      color: "Azul",
      dailyRate: 999.99,
      manufactureYear: 1967,
      model: 1968,
      category: "Hatch",
      mileage: "100000",
      unavailableDates: [],
      photoUrl: "teste",
    };

    const [createdCar] = await createCarUseCase.execute({
      name: mockCar.name,
      brand: mockCar.brand,
      color: mockCar.color,
      dailyRate: mockCar.dailyRate,
      manufactureYear: mockCar.manufactureYear,
      model: mockCar.model,
      category: mockCar.category,
      mileage: mockCar.mileage,
      unavailableDates: mockCar.unavailableDates,
      photoUrl: mockCar.photoUrl,
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

    const [car] = await findOneCarUseCase.execute(createdCar.id);

    expect(car.unavailableDates).toEqual(["2021-08-22"]);
  });
});
