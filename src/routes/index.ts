import { Router } from "express";

import { carsRoutes } from "./cars.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/user", usersRoutes);
router.use("/cars", carsRoutes);

export { router };
