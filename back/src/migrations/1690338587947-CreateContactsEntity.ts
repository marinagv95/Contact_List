import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateContactsEntity1690338587947 implements MigrationInterface {
    name = 'CreateContactsEntity1690338587947'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "secondEmail"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "secondTelephone"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "secondTelephone" character varying(20)`);
        await queryRunner.query(`ALTER TABLE "users" ADD "secondEmail" character varying`);
    }

}
