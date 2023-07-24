import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { Pizza } from "./Pizza";
import { Ingredient } from "./Ingredient";
import { v4 as uuidV4 } from "uuid";

@Entity({ name: "pizza_ingredients" })
class PizzaIngredient {
    @PrimaryColumn()
    id ?: string;

    @Column()
    @ManyToMany(() => Pizza)
    pizza_id: string;

    @Column()
    @ManyToMany(() => Ingredient)
    ingredient_id: string;

    constructor () {
        if (!this.id) {
            this.id = uuidV4();
        }
    }

}   

export { PizzaIngredient };