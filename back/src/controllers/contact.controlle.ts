import { Response, Request } from "express";
import { createContactService } from "../services/contacts/createContactService.service";
import listContactService from "../services/contacts/listContactService.service";
import updateContactService from "../services/contacts/updateContactService.service";
import deleteContactService from "../services/contacts/deleteContactService.service";
import Contact from "../entities/contact.entity";
import retrieveContactService from "../services/contacts/retrieveContactService.service";
import User from "../entities/user.entity";
import listAllContactsByUserService from "../services/contacts/listAllContactsByUserService.service";

const createContactController = async (req: Request, res: Response) => {
  const userId = res.locals.userId;
  const newContact = await createContactService(req.body, userId);

  return res.status(201).json(newContact);
};

const listContactController = async (req: Request, res: Response) => {
  const userId = res.locals.userId;
  const contacts = await listContactService(userId);

  return res.json(contacts);
};
7;
const retrieveContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = parseInt(req.params.id);
  const contact: Contact | null = await retrieveContactService(userId);

  return res.json(contact);
};

const listAllContactsByUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = parseInt(req.params.id);

  const contactUser: Contact[] | null = await listAllContactsByUserService(
    userId
  );

  return res.json(contactUser);
};

const updateContactController = async (req: Request, res: Response) => {
  const contactId = Number(req.params.id);
  const updateContact = await updateContactService(req.body, contactId);
  return res.json(updateContact);
};

const deleteContactController = async (req: Request, res: Response) => {
  const contactId = Number(req.params.id);
  await deleteContactService(contactId);
  res.status(204).send();
};

export {
  createContactController,
  listContactController,
  updateContactController,
  deleteContactController,
  retrieveContactController,
  listAllContactsByUserController,
};
