import { model, Schema } from "mongoose";
import { v4 as uuid } from "uuid";

import { Car } from "../../../../modules/cars/infra/model/Car";

interface IUser {
  id: string;
  name: string;
  email: string;
  carsRented: Array<{
    car: Car;
    dates: string[];
  }>;
}

const usersSchema = new Schema<IUser>({
  id: { type: String, required: true, unique: true, default: () => uuid() },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  carsRented: { type: Array, required: true, default: [] },
});

const UserModel = model<IUser>("User", usersSchema);

export { UserModel };
