import { Router } from "express";

import { pizzaRoutes } from "./pizza";
import { ordersRoutes } from "./orders";
import { ingredientsRoutes } from "./ingredients";

const routers = Router();

routers.use("/pizzas", pizzaRoutes);
routers.use("/orders", ordersRoutes);
routers.use("/ingredients", ingredientsRoutes);

export { routers };