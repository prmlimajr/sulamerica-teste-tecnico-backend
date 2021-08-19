import { CarsRepository } from "@src/modules/cars/repositories/CarsRepository";
import { CreateCarService } from "@src/modules/cars/services/CreateCarService";
import { ListCarsService } from "@src/modules/cars/services/ListCarsService";
import { Router } from "express";

const carsRoutes = Router();
const carsRepository = new CarsRepository();

carsRoutes.post("/", (req, res) => {
  const {
    name,
    brand,
    color,
    dailyRate,
    manufactureYear,
    model,
    category,
    mileage,
  } = req.body;

  const createCarService = new CreateCarService(carsRepository);

  createCarService.execute({
    name,
    brand,
    color,
    dailyRate,
    manufactureYear,
    model,
    category,
    mileage,
  });

  return res.status(200).send();
});

carsRoutes.get("/", (req, res) => {
  const cars = new ListCarsService(carsRepository).execute();

  return res.status(200).json(cars);
});

export { carsRoutes };
