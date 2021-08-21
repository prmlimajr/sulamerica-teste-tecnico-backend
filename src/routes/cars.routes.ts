import { BookCarController } from "@src/modules/cars/useCases/bookCar/BookCarController";
import { CreateCarController } from "@src/modules/cars/useCases/createCar/CreateCarController";
import { FindOneCarController } from "@src/modules/cars/useCases/findOneCar/FindOneCarController";
import { ListCarsController } from "@src/modules/cars/useCases/listCars/ListCarsController";
import { UploadCarPhotoController } from "@src/modules/cars/useCases/uploadCarPhoto/UploadCarPhotoController";
import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";

const carsRoutes = Router();
const createCarController = new CreateCarController();
const listCarsController = new ListCarsController();
const findOneCarController = new FindOneCarController();
const bookCarController = new BookCarController();
const uploadCarPhotoController = new UploadCarPhotoController();

const upload = multer(uploadConfig.upload("./tmp"));

carsRoutes.post("/", createCarController.handle);

carsRoutes.get("/", listCarsController.handle);

carsRoutes.get("/:id", findOneCarController.handle);

carsRoutes.post("/book/:id", bookCarController.handle);

carsRoutes.patch(
  "/photo/:id",
  upload.single("file"),
  uploadCarPhotoController.handle
);

export { carsRoutes };
