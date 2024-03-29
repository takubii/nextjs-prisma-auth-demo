import { z } from 'zod';

export const signUpSchema = z.object({
  email: z.string().email({
    message: 'メールアドレスを入力してください。',
  }),
  password: z.string(),
});
