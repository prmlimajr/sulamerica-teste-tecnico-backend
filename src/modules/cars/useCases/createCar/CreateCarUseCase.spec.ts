import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCar: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create a car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCar = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to create a car", () => {});
});
