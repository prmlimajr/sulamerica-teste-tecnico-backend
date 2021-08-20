import { model, Schema } from "mongoose";
import { v4 as uuid } from "uuid";

interface IUser {
  id: string;
  name: string;
  email: string;
}

const usersSchema = new Schema<IUser>({
  id: { type: String, required: true, unique: true, default: () => uuid() },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const UserModel = model<IUser>("User", usersSchema);

export { UserModel };
