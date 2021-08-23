import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "../createCar/CreateCarUseCase";
import { FindOneCarUseCase } from "./FindOneCarUseCase";

let findOneCarUseCase: FindOneCarUseCase;
let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Find a car by id", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    findOneCarUseCase = new FindOneCarUseCase(carsRepositoryInMemory);
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to find a car by id", async () => {
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

    const [createdCar] = await createCarUseCase.execute({
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

    const [foundCar] = await findOneCarUseCase.execute(createdCar.id);

    expect(foundCar).toEqual(createdCar);
  });
});
