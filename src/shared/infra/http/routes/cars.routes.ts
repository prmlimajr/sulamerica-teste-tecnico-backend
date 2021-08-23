import { Router } from "express";

import { BookCarController } from "../../../../modules/cars/useCases/bookCar/BookCarController";
import { CreateCarController } from "../../../../modules/cars/useCases/createCar/CreateCarController";
import { FindOneCarController } from "../../../../modules/cars/useCases/findOneCar/FindOneCarController";
import { ListCarsController } from "../../../../modules/cars/useCases/listCars/ListCarsController";

const carsRoutes = Router();
const createCarController = new CreateCarController();
const listCarsController = new ListCarsController();
const findOneCarController = new FindOneCarController();
const bookCarController = new BookCarController();

carsRoutes.post("/", createCarController.handle);

carsRoutes.get("/", listCarsController.handle);

carsRoutes.get("/:id", findOneCarController.handle);

carsRoutes.post("/book/:id", bookCarController.handle);

export { carsRoutes };
