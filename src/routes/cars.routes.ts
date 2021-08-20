import { bookCarController } from "@src/modules/cars/useCases/bookCar";
import { createCarController } from "@src/modules/cars/useCases/createCar";
import { findOneCarController } from "@src/modules/cars/useCases/findOneCar";
import { listCarsController } from "@src/modules/cars/useCases/listCars";
import { Router } from "express";
import multer from "multer";

const carsRoutes = Router();
const upload = multer({
  dest: "./tmp",
});

carsRoutes.post("/", (request, response) => {
  return createCarController.handle(request, response);
});

carsRoutes.get("/", (request, response) => {
  return listCarsController.handle(request, response);
});

carsRoutes.get("/:id", (request, response) => {
  return findOneCarController.handle(request, response);
});

carsRoutes.post("/book/:id", (request, response) => {
  return bookCarController.handle(request, response);
});

carsRoutes.post("/photo", upload.single("file"), (request, response) => {
  const { file } = request;
  console.log(file);
  return response.send();
});

export { carsRoutes };
