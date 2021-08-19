import { CarsRepository } from "../../repositories/implementations/CarsRepository";
import { UploadCarPhotoController } from "./UploadCarPhotoController";
import { UploadCarPhotoUseCase } from "./UploadCarPhotoUseCase";

const carsRepository = CarsRepository.getInstance();
const uploadCarPhotoUseCase = new UploadCarPhotoUseCase(carsRepository);
const uploadCarPhotoController = new UploadCarPhotoController(
  uploadCarPhotoUseCase
);

export { uploadCarPhotoController };
