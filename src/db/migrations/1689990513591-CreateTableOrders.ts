import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableOrders1689990513591 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "orders",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    }, 
                    {
                        name: "quantity",
                        type: "numeric",
                    },
                    {
                        name: "pizza_id",
                        type: "uuid"
                    }
                ],
                foreignKeys: [
                    {
                        name: "OrderPizzaFK",
                        columnNames: ["pizza_id"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "pizzas"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("orders");
    }

}
