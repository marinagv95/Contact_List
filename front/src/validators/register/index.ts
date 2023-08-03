import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().nonempty("Seu Nome completo"),
  email: z.string().email("Deve ser um e-mail"),
  password: z.string().nonempty("Senha é obrigatória"),
  telephone: z
    .string()
    .nonempty("Telefone no formato inválido! Exemplo: (XX)XXXXXXXXX")
    .regex(/^\(\d{2}\)\d{8,9}$/),
});

export type LoginData = z.infer<typeof registerSchema>;
