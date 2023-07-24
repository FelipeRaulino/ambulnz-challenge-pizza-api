import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTablePizzaIngredient1689933094055 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "pizza_ingredients",
                columns: [
                    {
                        name: "pizza_id",
                        type: "uuid",
                        isNullable: false,
                    },
                    {
                        name: "ingredient_id",
                        type: "uuid",
                        isNullable: false,
                    }
                ],
                foreignKeys: [
                    {
                        name: "PizzaIngredientFK",
                        columnNames: ["pizza_id"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "pizzas"
                    },
                    {
                        name: "IngredientPizzaFK",
                        columnNames: ["ingredient_id"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "ingredients"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("pizza_ingredients");
    }

}
