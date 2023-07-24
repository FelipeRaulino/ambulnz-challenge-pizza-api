import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Pizza } from "./Pizza";
import { v4 as uuidV4 } from "uuid";

@Entity({ name: "orders" })
class Order {

    @PrimaryColumn()
    id?: string;

    @OneToOne(type => Pizza)
    @JoinColumn({
        name: "pizza_id"
    })
    pizza: Pizza;

    @Column()
    pizza_id: string;

    @Column()
    quantity: Number;

    constructor () {
        if (!this.id){
            this.id = uuidV4();
        }
    }
}

export { Order };