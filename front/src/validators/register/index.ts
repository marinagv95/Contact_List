import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().nonempty("Seu Nome completo"),
  email: z.string().email("Deve ser um e-mail"),
  password: z.string().nonempty("Senha é obrigatória"),
  telephone: z
    .string()
    .regex(/^\(\d{2}\)\d{8,9}$/)
    .nonempty("Telefone obrigatório")
    .refine((value) => /^\(\d{2}\)\d{8,9}$/.test(value), {
      message: "Telefone no formato inválido (exemplo válido: (XX)XXXXXXXXX",
    }),
});


export type LoginData = z.infer<typeof registerSchema>;

