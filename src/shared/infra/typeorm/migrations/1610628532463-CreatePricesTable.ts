import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePricesTable1610628532463 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'prices',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'price',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ]
      }))
    }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('prices');
  }

}
