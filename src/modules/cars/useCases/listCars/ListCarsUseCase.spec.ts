import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "../createCar/CreateCarUseCase";
import { ListCarsUseCase } from "./ListCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List all cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to list all cars", async () => {
    const car1 = {
      name: "Fusca",
      brand: "VolksWagen",
      color: "Azul",
      dailyRate: 999.99,
      manufactureYear: 1967,
      model: 1968,
      category: "Hatch",
      mileage: "100000",
    };

    await createCarUseCase.execute({
      name: car1.name,
      brand: car1.brand,
      color: car1.color,
      dailyRate: car1.dailyRate,
      manufactureYear: car1.manufactureYear,
      model: car1.model,
      category: car1.category,
      mileage: car1.mileage,
    });

    const car2 = {
      name: "Mustang",
      brand: "Ford",
      color: "Preto",
      dailyRate: 399.99,
      manufactureYear: 1972,
      model: 1972,
      category: "Sedan",
      mileage: "100000",
    };

    await createCarUseCase.execute({
      name: car2.name,
      brand: car2.brand,
      color: car2.color,
      dailyRate: car2.dailyRate,
      manufactureYear: car2.manufactureYear,
      model: car2.model,
      category: car2.category,
      mileage: car2.mileage,
    });

    const cars = await listCarsUseCase.execute();

    expect(cars.length).toBe(2);
  });
});
