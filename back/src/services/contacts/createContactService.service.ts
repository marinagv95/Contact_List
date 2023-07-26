import {
  TContactRequest,
  TContactResponse,
} from "../../interfaces/contact.interfaces";
import { AppDataSource } from "../../data-source";
import Contact from "../../entities/contact.entity";
import User from "../../entities/user.entity";
import { AppError } from "../../error";
import { contactSchema } from "../../schemas/contactSchema.schema";

const createContactService = async (
  data: TContactRequest,
  userId: number
): Promise<TContactResponse> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("user not found", 404);
  }

  const existingContact = await contactRepository.findOne({
    where: [
      { email: data.email, user: { id: userId } },
      { telephone: data.telephone, user: { id: userId } },
    ],
  });

  if (existingContact) {
    throw new AppError("Email or telephone already in use", 409);
  }

  const contact = contactRepository.create({
    ...data,
    user,
  });

  await contactRepository.save(contact);

  return contactSchema.parse(contact);
};

export { createContactService };
