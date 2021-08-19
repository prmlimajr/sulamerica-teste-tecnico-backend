import { CarsRepository } from "../../repositories/implementations/CarsRepository";
import { ListCarsController } from "./ListCarsController";
import { ListCarsUseCase } from "./ListCarsUseCase";

const carsRepository = CarsRepository.getInstance();
const listCarsUseCase = new ListCarsUseCase(carsRepository);
const listCarsController = new ListCarsController(listCarsUseCase);

export { listCarsController };
