import { BookCarController } from "./BookCarController";
import { BookCarUseCase } from "./BookCarUseCase";

const bookCarUseCase = new BookCarUseCase();
const bookCarController = new BookCarController(bookCarUseCase);

export { bookCarController };
