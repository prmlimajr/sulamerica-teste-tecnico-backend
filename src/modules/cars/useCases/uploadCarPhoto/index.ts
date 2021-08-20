import { UploadCarPhotoController } from "./UploadCarPhotoController";
import { UploadCarPhotoUseCase } from "./UploadCarPhotoUseCase";

const uploadCarPhotoUseCase = new UploadCarPhotoUseCase();
const uploadCarPhotoController = new UploadCarPhotoController(
  uploadCarPhotoUseCase
);

export { uploadCarPhotoController };
