import { Request, Response } from "express";
import { container } from "tsyringe";

import { UploadCarPhotoUseCase } from "./UploadCarPhotoUseCase";

class UploadCarPhotoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { filename } = request.file;

    const uploadCarPhotoUseCase = container.resolve(UploadCarPhotoUseCase);

    await uploadCarPhotoUseCase.execute({ id, filename });

    return response.status(204).send();
  }
}

export { UploadCarPhotoController };
