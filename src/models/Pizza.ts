import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity({ name: "pizzas" })
class Pizza {
    @PrimaryColumn()
    id: String;
    
    @Column()
    name: String;

    @Column()
    price: Number;

    constructor(){
        if (!this.id){
            this.id = uuidV4();
        }
    }
}

export { Pizza };