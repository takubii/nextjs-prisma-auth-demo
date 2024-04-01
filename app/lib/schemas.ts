import { z } from 'zod';

export const signUpSchema = z.object({
  email: z.string().email({
    message: 'メールアドレスを入力してください。',
  }),
  password: z.string().min(1, {
    message: 'パスワードを入力してください。',
  }),
});

export const signInSchema = z.object({
  email: z.string().email({
    message: 'メールアドレスを入力してください。',
  }),
  password: z.string().min(1, {
    message: 'パスワードを入力してください。',
  }),
});
