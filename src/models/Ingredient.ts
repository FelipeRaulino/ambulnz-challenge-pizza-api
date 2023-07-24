import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity({ name: 'ingredients' })
class Ingredient {
    @PrimaryColumn()
    id: String;

    @Column()
    name: String;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Ingredient };