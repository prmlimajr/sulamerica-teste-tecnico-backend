import { CarsRepository } from "../../repositories/implementations/CarsRepository";

interface IRequest {
  id: string;
  filename: string;
}

class UploadCarPhotoUseCase {
  async execute({ id, filename }: IRequest): Promise<void> {
    const carsRepository = new CarsRepository();

    const [car] = await carsRepository.findOne(id);

    car.photoUrl = `http://127.0.0.1:8080/files/${filename}`;

    await carsRepository.uploadPhoto(car);
  }
}

export { UploadCarPhotoUseCase };
