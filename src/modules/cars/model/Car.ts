import { v4 as uuidV4 } from "uuid";

class Car {
  id?: string;
  name: string;
  brand: string;
  color: string;
  model: number;
  manufactureYear: number;
  category: string;
  mileage: number;
  photoUrl?: string;
  dailyRate: number;
  unavailableDates: string[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }

    if (!this.unavailableDates) {
      this.unavailableDates = [];
    }
  }
}

export { Car };
