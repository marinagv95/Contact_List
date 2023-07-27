import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Contact from "../../entities/contact.entity";

const listAllContactsByUserService = async (
  userId: number
): Promise<Contact[] | null> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contacts: Contact[] | null = await contactRepository
    .createQueryBuilder("contacts")
    .innerJoinAndSelect("contacts.user", "user")
    .where("user.id = :userId", { userId })
    .getMany();

  return contacts;
};

export default listAllContactsByUserService;
