import { inject, injectable } from "tsyringe";

import { ICarsRepository } from "../../repositories/ICarsRepository";

interface IRequest {
  id: string;
  filename: string;
}

@injectable()
class UploadCarPhotoUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute({ id, filename }: IRequest): Promise<void> {
    const [car] = await this.carsRepository.findOne(id);
    console.log(car);
    car.photoUrl = `http://127.0.0.1:8080/files/${filename}`;

    await this.carsRepository.uploadPhoto(car);
  }
}

export { UploadCarPhotoUseCase };
