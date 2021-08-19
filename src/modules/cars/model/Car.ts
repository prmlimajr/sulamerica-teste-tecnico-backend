import { v4 as uuidV4 } from "uuid";

class Car {
  id?: string;
  name: string;
  brand: string;
  color: string;
  model: string;
  manufactureYear: string;
  mileage: number;
  photoUrl: string;
  unavailableDates: string[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Car };
