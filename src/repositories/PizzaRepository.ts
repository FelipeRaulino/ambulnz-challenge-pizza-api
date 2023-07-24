import { Equal, Repository } from "typeorm";
import { Pizza } from "../models/Pizza";
import { AppDataSource } from "../db/AppDataSource";
import { PizzaIngredient } from "../models/PizzaIngredient";
import { Ingredient } from "../models/Ingredient";

interface PizzaDTO {
    id?: string;
    name: string;
    price: string;
    ingredients: String[];
}

interface PizzaResponse {
    id: String;
    name: String;
    price: Number;
    ingredients?: String[];
}

class PizzaRepository {

    private pizzaRepository: Repository<Pizza>;
    private pizzaIngredientRepository: Repository<PizzaIngredient>;
    private ingredientRepository: Repository<Ingredient>;

    constructor() {
        this.pizzaRepository = AppDataSource.getRepository(Pizza);
        this.pizzaIngredientRepository = AppDataSource.getRepository(PizzaIngredient);
        this.ingredientRepository = AppDataSource.getRepository(Ingredient);
    }

    public async save({ id, name, price, ingredients }: PizzaDTO){
        const ingredientsFormatted = await Promise.all(ingredients.map(async (ingredient) => {
            const ingredientObject = await this.ingredientRepository.findOneBy({
                id: Equal(ingredient)
            });

            return ingredientObject.name;
        }));

        const pizza = this.pizzaRepository.create({
            name,
            price
        });

        const pizzaResponse = await this.pizzaRepository.save(pizza);

        const pizzaResponseDTO: PizzaResponse = {
            id: pizzaResponse.id,
            name: pizzaResponse.name,
            price: pizzaResponse.price,
            ingredients: ingredientsFormatted
        };

        ingredients.forEach(async ingredient => {
            const pizzaIngredient = this.pizzaIngredientRepository.create({
                pizza_id: pizza.id as string,
                ingredient_id: ingredient as string
            });

            await this.pizzaIngredientRepository.save(pizzaIngredient);
        });
      
        return pizzaResponseDTO;
    }

    public async getAll(): Promise<Pizza[]>{
        const allPizzas = await this.pizzaRepository.find();

        await Promise.all(allPizzas.map(async (pizza) => {
            const ingredientsOfPizza = await this.pizzaIngredientRepository.find({
                where: {
                    pizza_id: pizza.id as string
                }
            });

            const ingredientsName = await Promise.all(ingredientsOfPizza.map(async (item) => {
                const ingredientName = await this.ingredientRepository.findOne({
                    where: { id: Equal(item.ingredient_id) }
                });

                return ingredientName.name;
            }));

            pizza["ingredients"] = [...ingredientsName];
        }));

        return allPizzas;
    }

}

export { PizzaRepository };