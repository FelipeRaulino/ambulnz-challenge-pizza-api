import { Repository } from "typeorm";
import { Order } from "../models/Order";
import { AppDataSource } from "../db/AppDataSource";

interface CreateOrderDTO {
    id?: string;
    pizza_id: string;
    quantity: Number;
}

class OrderRepository {

    private orderRepository: Repository<Order>;

    constructor () {
        this.orderRepository = AppDataSource.getRepository(Order);
    }

    public async save({ id, quantity, pizza_id }: CreateOrderDTO): Promise<Order> {
        const order = this.orderRepository.create({
            quantity,
            pizza_id
        });

        const orderResponse = await this.orderRepository.save(order);

        return orderResponse;
    }

    public async getAll(): Promise<Order[]>{
        const orders = await this.orderRepository.find({ relations: ["pizza"] });

        return orders;
    }

    public async getById(id: string): Promise<Order>{
        const order = await this.orderRepository.findOne({
            where: { id },
            relations: ["pizza"]
        });

        delete order.pizza_id;

        return order;
    }

}

export { OrderRepository };