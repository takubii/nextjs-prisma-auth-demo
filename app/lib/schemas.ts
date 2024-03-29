import { z } from 'zod';

export const signUpSchema = z.object({
  email: z.string().email({
    message: 'メールアドレスを入力してください。',
  }),
  password: z.string().min(1),
});

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});
