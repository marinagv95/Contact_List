import { z } from "zod";

const contactSchemaRequest = z.object({
  name: z.string(),
  email: z.string().email(),
  telephone: z
    .string()
    .regex(/^\(\d{2}\)\d{8,9}$/)
    .refine((value) => /^\(\d{2}\)\d{8,9}$/.test(value), {
      message: "Telefone no formato inválido (exemplo válido: (XX)XXXXXXXXX",
    }),
});

const contactSchema = contactSchemaRequest.extend({
  id: z.number().int(),
  createdAt: z.string(),
});

const contactSchemaResponse = z.array(contactSchema);

const contactSchemaUpdateRequest = contactSchema.partial().omit({
  id: true,
});

export {
  contactSchema,
  contactSchemaRequest,
  contactSchemaResponse,
  contactSchemaUpdateRequest,
};
