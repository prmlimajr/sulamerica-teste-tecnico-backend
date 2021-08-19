import { CarsRepository } from "../../repositories/implementations/CarsRepository";
import { CreateCarController } from "./CreateCarController";
import { CreateCarUseCase } from "./CreateCarUseCase";

const carsRepository = CarsRepository.getInstance();
const createCarUseCase = new CreateCarUseCase(carsRepository);
const createCarController = new CreateCarController(createCarUseCase);

export { createCarController };
