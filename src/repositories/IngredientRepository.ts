import { Repository } from "typeorm";
import { AppDataSource } from "../db/AppDataSource"
import { Ingredient } from "../models/Ingredient"

class IngredientRepository {
    private ingredientRepository: Repository<Ingredient>;

    constructor () {
        this.ingredientRepository = AppDataSource.getRepository(Ingredient);
    }

    public async save (name: string): Promise<Ingredient> {
        const ingredient = this.ingredientRepository.create({
            name
        });

        const ingredientResponse = await this.ingredientRepository.save(ingredient);

        return ingredientResponse;
    }

    public async getAll (): Promise<Ingredient[]> {
        const ingredients = await this.ingredientRepository.find();

        return ingredients;
    }
}

export { IngredientRepository }