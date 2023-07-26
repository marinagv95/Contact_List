import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Contact from "../../entities/contact.entity";
import { AppError } from "../../error";

const retrieveContactService = async (
  userId: number
): Promise<Contact | null> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contact: Contact | null = await contactRepository
    .createQueryBuilder("contacts")
    .innerJoinAndSelect("users", "users.contacts")
    .where("contacts.id = :userId", { userId })
    .getOne();

  if (!contact) {
    throw new AppError("Contact not found");
  }

  return contact;
};

export default retrieveContactService;
