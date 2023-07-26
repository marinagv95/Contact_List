import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateContactsEntity1690337702918 implements MigrationInterface {
    name = 'CreateContactsEntity1690337702918'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "secondEmail"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "secondTelephone"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "secondTelephone" character varying(20)`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "secondEmail" character varying`);
    }

}
