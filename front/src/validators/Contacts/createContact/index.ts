import { z } from "zod";

export const createContactSchema = z.object({
  name: z.string().nonempty("Seu Nome completo"),
  email: z.string().email("Deve ser um e-mail"),
  telephone: z
    .string()
    .nonempty("Telefone no formato inválido! Exemplo: (XX)XXXXXXXXX")
    .regex(/^\(\d{2}\)\d{8,9}$/),
});

export type LoginData = z.infer<typeof createContactSchema>;
