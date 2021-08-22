import { Router } from "express";

import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { carsRoutes } from "./cars.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/user", usersRoutes);
router.use(ensureAuthenticated);
router.use("/cars", carsRoutes);

export { router };
