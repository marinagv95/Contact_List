import { z } from "zod";

const userSchemaRequest = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  telephone: z
    .string()
    // .regex(/^\(\d{2}\)\d{8,9}$/)
    // .refine((value) => /^\(\d{2}\)\d{8,9}$/.test(value), {
      // message: "Telefone no formato inválido (exemplo válido: (XX)XXXXXXXXX",
    // }),
});

const userSchema = userSchemaRequest.extend({
  id: z.number().int(),
  createdAt: z.string(),
});

const userSchemaResponse = userSchema.omit({
  password: true,
});

const listUserSchema = userSchemaResponse.array();

const userSchemaUpdateRequest = userSchema.partial().omit({
  id: true,
});

const requestLoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const responseLoginSchema = z.object({
  token: z.string(),
});
const loginUserSchema = userSchema.pick({
  email: true,
  password: true,
});

export {
  userSchemaRequest,
  userSchema,
  userSchemaResponse,
  userSchemaUpdateRequest,
  listUserSchema,
  loginUserSchema,
  responseLoginSchema,
  requestLoginSchema,
};
