import { Column, MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class AlterTablePizzaIngredientsAddIdPrimaryColumn1689946228807 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("pizza_ingredients", new TableColumn({
            name: "id",
            type: "uuid",
            isPrimary: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("pizza_ingredients", "id");
    }

}
