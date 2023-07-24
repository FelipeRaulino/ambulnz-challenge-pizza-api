import { Router } from "express";
import { PizzaRepository } from "../../repositories/PizzaRepository";

const pizzaRoutes = Router();

const pizzaRepository = new PizzaRepository();

pizzaRoutes.get("/", async (req, res) => {
    const allPizzas = await pizzaRepository.getAll();

    return res.status(200).json(allPizzas);
});

pizzaRoutes.post("/", async (req, res) => {
    const { name, price, ingredients } = req.body;

    const pizza = await pizzaRepository.save({
        name, 
        price,
        ingredients
    });

    return res.status(201).json(pizza);
});

export { pizzaRoutes };