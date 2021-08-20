import { CreateCarController } from "./CreateCarController";
import { CreateCarUseCase } from "./CreateCarUseCase";

const createCarUseCase = new CreateCarUseCase();
const createCarController = new CreateCarController(createCarUseCase);

export { createCarController };
