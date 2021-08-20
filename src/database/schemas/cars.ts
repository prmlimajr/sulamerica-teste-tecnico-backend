import { model, Schema } from "mongoose";
import { v4 as uuid } from "uuid";

interface ICar {
  id: string;
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
}

const carsSchema = new Schema<ICar>({
  id: { type: String, required: true, unique: true, default: () => uuid() },
  name: { type: String, required: true },
  brand: { type: String, required: true },
  color: { type: String, required: true },
  model: { type: Number, required: true },
  manufactureYear: { type: Number, required: true },
  category: { type: String, required: true },
  mileage: { type: Number, required: true },
  photoUrl: { type: String },
  dailyRate: { type: Number, required: true },
  unavailableDates: { type: [Date], required: true },
});

const CarModel = model<ICar>("Car", carsSchema);

export { CarModel };
