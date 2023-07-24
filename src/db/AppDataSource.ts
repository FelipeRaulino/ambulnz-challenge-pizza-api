import { DataSource } from "typeorm";

import { Pizza } from "../models/Pizza";
import { Ingredient } from "../models/Ingredient";
import { PizzaIngredient } from "../models/PizzaIngredient";
import { Order } from "../models/Order";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "ambulnz_db",
    port: 5432,
    username: "postgres",
    password: "secret123",
    database: "ambulnz_db",
    entities: [Pizza, Ingredient, PizzaIngredient, Order],
    migrations: ["./src/db/migrations/*.ts"],
});

export { AppDataSource };