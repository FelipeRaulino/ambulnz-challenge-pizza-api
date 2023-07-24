import { Router } from "express";
import { IngredientRepository } from "../../repositories/IngredientRepository";

const ingredientsRoutes = Router();

ingredientsRoutes.get("/", async (req, res) => {
    const ingredientRepository = new IngredientRepository();

    const ingredients = await ingredientRepository.getAll();

    return res.status(200).json(ingredients);
});

ingredientsRoutes.post("/", async (req, res) => {
    const { name } = req.body;

    const ingredientRepository = new IngredientRepository();

    const ingredient = await ingredientRepository.save(name);

    return res.status(200).json(ingredient);
});

export { ingredientsRoutes };