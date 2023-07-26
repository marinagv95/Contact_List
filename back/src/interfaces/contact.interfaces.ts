import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  contactSchema,
  contactSchemaRequest,
  contactSchemaResponse,
} from "../schemas/contactSchema.schema";

type TContactRequest = z.infer<typeof contactSchemaRequest>;
type TContact = z.infer<typeof contactSchema>;
type TContactResponse = z.infer<typeof contactSchema>;
type TContactsResponse = z.infer<typeof contactSchemaResponse>;
type TContactUpdate = DeepPartial<TContactRequest>;

export {
  TContact,
  TContactRequest,
  TContactResponse,
  TContactsResponse,
  TContactUpdate,
};
