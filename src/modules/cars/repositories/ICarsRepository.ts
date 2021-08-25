import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { Car } from "../infra/model/Car";

interface ICarsRentedByUser {
  car: Car;
  dates: string[];
}

interface ICarsRepository {
  create({
    name,
    brand,
    color,
    dailyRate,
    manufactureYear,
    model,
    category,
    mileage,
    unavailableDates,
    photo,
    isShowcase,
  }: ICreateCarDTO): Promise<Car[]>;
  listAll(): Promise<Car[]>;
  findOne(id: string): Promise<Car[]>;
  book(
    carId: string,
    updatedDatesInCar: string[],
    userId: string,
    updatedUserCarsRented: ICarsRentedByUser[]
  ): Promise<void>;
  uploadPhoto(car: Car): Promise<void>;
}

export { ICarsRepository, ICarsRentedByUser };
