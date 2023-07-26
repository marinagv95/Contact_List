import { AppDataSource } from "../../data-source";
import Contact from "../../entities/contact.entity";
import User from "../../entities/user.entity";
import { AppError } from "../../error";
import { TContactResponse } from "../../interfaces/contact.interfaces";
import { contactSchemaResponse } from "../../schemas/contactSchema.schema";

const listContactService = async (
  userId: number
): Promise<TContactResponse[]> => {
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

  const contacts = await contactRepository.find({
    where: {
      user: { id: userId },
    },
  });

  return contactSchemaResponse.parse(contacts);
};

export default listContactService;
