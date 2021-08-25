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
  photo?: string;
  dailyRate: number;
  unavailableDates: string[];
  isShowcase: boolean;
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
  photo: { type: String },
  dailyRate: { type: Number, required: true },
  unavailableDates: { type: [String], required: true },
  isShowcase: { type: Boolean, required: true, default: false },
});

const CarModel = model<ICar>("Car", carsSchema);

export { CarModel };
