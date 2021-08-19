import { Car } from "../../model/Car";
import { ICarsRepository, ICreateCarDTO } from "../ICarsRepository";

class CarsRepository implements ICarsRepository {
  private cars: Car[];
  private static INSTANCE: CarsRepository;

  private constructor() {
    this.cars = [];
  }

  public static getInstance(): CarsRepository {
    if (!CarsRepository.INSTANCE) {
      CarsRepository.INSTANCE = new CarsRepository();
    }

    return CarsRepository.INSTANCE;
  }

  create({
    name,
    brand,
    color,
    dailyRate,
    manufactureYear,
    model,
    category,
    mileage,
  }: ICreateCarDTO): void {
    const car = new Car();

    Object.assign(car, {
      name,
      brand,
      color,
      dailyRate,
      manufactureYear,
      model,
      category,
      mileage,
    });

    this.cars.push(car);
  }

  list(): Car[] {
    return this.cars;
  }

  book(id: string, dates: string[]): void {
    const car = this.cars.find((car) => car.id === id);

    const isAvailable = dates.some(
      (date) => !car.unavailableDates.includes(date)
    );

    if (!isAvailable) {
      throw new Error("Car is unavailable");
    }

    car.unavailableDates.push(...dates);
  }
}

export { CarsRepository };
