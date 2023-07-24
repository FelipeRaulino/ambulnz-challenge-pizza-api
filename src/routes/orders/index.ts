import { Router } from "express";
import { OrderRepository } from "../../repositories/OrderRepository";

const ordersRoutes = Router();

const orderRepository = new OrderRepository();

ordersRoutes.get("/", async (req, res) => {
    const orders = await orderRepository.getAll();

    orders.forEach(pizza => {
        delete pizza.pizza_id
    }); 

    return res.status(200).json(orders);
});

ordersRoutes.post("/", async (req, res) => {
    const { quantity, pizza_id } = req.body;

    const order = await orderRepository.save({ quantity, pizza_id });

    return res.status(201).json(order);
});

ordersRoutes.get("/:id", async (req, res) => {
    const { id } = req.params;

    const order = await orderRepository.getById(id);

    return res.status(200).json(order);
});

export { ordersRoutes };