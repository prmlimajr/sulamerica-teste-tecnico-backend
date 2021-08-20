import { FindOneCarController } from "./FindOneCarController";
import { FindOneCarUseCase } from "./FindOneCarUseCase";

const findOneCarUseCase = new FindOneCarUseCase();
const findOneCarController = new FindOneCarController(findOneCarUseCase);

export { findOneCarController };
