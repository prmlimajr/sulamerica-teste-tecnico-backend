import { ListCarsController } from "./ListCarsController";
import { ListCarsUseCase } from "./ListCarsUseCase";

const listCarsUseCase = new ListCarsUseCase();
const listCarsController = new ListCarsController(listCarsUseCase);

export { listCarsController };
