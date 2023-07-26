import { AppDataSource } from "../../data-source";
import Contact from "../../entities/contact.entity";
import { AppError } from "../../error";
import {
  TContactResponse,
  TContactUpdate,
} from "../../interfaces/contact.interfaces";
import { contactSchema } from "../../schemas/contactSchema.schema";

const updateContactService = async (
  data: TContactUpdate,
  contactId: number
): Promise<TContactResponse> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const oldContact = await contactRepository.findOneBy({ id: contactId });

  if (!oldContact) {
    throw new AppError("Contact not found", 404);
  }

  const newContactData = contactRepository.create({
    ...oldContact,
    ...data,
  });

  await contactRepository.save(newContactData);

  return contactSchema.parse(newContactData);
};

export default updateContactService;
