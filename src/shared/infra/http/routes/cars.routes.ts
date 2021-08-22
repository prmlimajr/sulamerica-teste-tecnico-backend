import { BookCarController } from "@src/modules/cars/useCases/bookCar/BookCarController";
import { CreateCarController } from "@src/modules/cars/useCases/createCar/CreateCarController";
import { FindOneCarController } from "@src/modules/cars/useCases/findOneCar/FindOneCarController";
import { ListCarsController } from "@src/modules/cars/useCases/listCars/ListCarsController";
import { Router } from "express";

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
