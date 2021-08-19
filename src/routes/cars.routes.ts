import { createCarController } from "@src/modules/cars/useCases/createCar";
import { listCarsController } from "@src/modules/cars/useCases/listCars";
import { Router } from "express";

const carsRoutes = Router();

carsRoutes.post("/", (request, response) => {
  return createCarController.handle(request, response);
});

carsRoutes.get("/", (request, response) => {
  return listCarsController.handle(request, response);
});

export { carsRoutes };
