import express from "express";

import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/user", usersRoutes);

app.listen(8080, () => {
  console.log("Server is running");
});
