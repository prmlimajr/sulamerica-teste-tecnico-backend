import { ICarsRepository } from "../../repositories/ICarsRepository";

class UploadCarPhotoUseCase {
  constructor(private carsRepository: ICarsRepository) {}

  execute(id: string, file: File): void {
    this.carsRepository.uploadPhoto(id, file);
  }
}

export { UploadCarPhotoUseCase };
