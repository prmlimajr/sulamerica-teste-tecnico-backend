import express from "express";

import { carsRoutes } from "./routes/cars.routes";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/user", usersRoutes);
app.use("/cars", carsRoutes);

app.listen(8080, () => {
  console.log("Server is running");
});
