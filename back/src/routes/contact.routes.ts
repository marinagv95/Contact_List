import { Router } from "express";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValidMiddleware.middleware";
import {
  createContactController,
  deleteContactController,
  listContactController,
  retrieveContactController,
  updateContactController,
} from "../controllers/contact.controlle";
import {
  contactSchemaRequest,
  contactSchemaUpdateRequest,
} from "../schemas/contactSchema.schema";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValideMiddleware.middleware";

const contactRoutes = Router();

contactRoutes.post(
  "",
  ensureTokenIsValidMiddleware,
  ensureDataIsValidMiddleware(contactSchemaRequest),
  createContactController
);
contactRoutes.get("", listContactController);
contactRoutes.get(
  "/:id",
  ensureTokenIsValidMiddleware,
  retrieveContactController
);
contactRoutes.patch(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureDataIsValidMiddleware(contactSchemaUpdateRequest),
  updateContactController
);
contactRoutes.delete(
  "/:id",
  ensureTokenIsValidMiddleware,
  deleteContactController
);

export default contactRoutes;
