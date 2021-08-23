import { v4 as uuidV4 } from "uuid";

import { Car } from "../../../cars/infra/model/Car";

class User {
  id?: string;
  name: string;
  email: string;
  carsRented: Array<{
    car: Car;
    dates: string[];
  }>;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
