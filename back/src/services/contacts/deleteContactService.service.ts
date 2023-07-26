import { AppDataSource } from "../../data-source";
import Contact from "../../entities/contact.entity";
import { AppError } from "../../error";

const deleteContactService = async (contactId: number): Promise<void> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOneBy({ id: contactId });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  await contactRepository.remove(contact);
};

export default deleteContactService;
