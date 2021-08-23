import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create a car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to create a car", async () => {
    const car = {
      name: "Fusca",
      brand: "VolksWagen",
      color: "Azul",
      dailyRate: 999.99,
      manufactureYear: 1967,
      model: 1968,
      category: "Hatch",
      mileage: "100000",
      photoUrl: "teste",
    };

    await createCarUseCase.execute({
      name: car.name,
      brand: car.brand,
      color: car.color,
      dailyRate: car.dailyRate,
      manufactureYear: car.manufactureYear,
      model: car.model,
      category: car.category,
      mileage: car.mileage,
      photoUrl: car.photoUrl,
    });

    expect(carsRepositoryInMemory.cars.length).toBe(1);
  });
});
