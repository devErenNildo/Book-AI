import { z } from 'zod';

export const contactSchema = z.object({
    name: z.string().min(1, 'O nome é obrigatório.'),
    email: z
        .string()
        .min(1, 'O email é obrigatório.')
        .email('Formato de email inválido.'),
    subject: z.string().min(1, 'O assunto é obrigatório.'),
    message: z.string().min(1, 'A mensagem é obrigatória.'),
});

// Inferência automática de tipos para o form
export type ContactFormData = z.infer<typeof contactSchema>;
