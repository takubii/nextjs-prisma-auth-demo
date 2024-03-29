'use server';

import { prisma } from '@/globals/db';
import bcrypt from 'bcrypt';
import { redirect } from 'next/navigation';
import { getUserByEmail } from '../db/user';
import { signUpSchema } from './schemas';

export type SignUpState = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};

export async function signUp(prevState: SignUpState, formData: FormData): Promise<SignUpState> {
  const validatedFields = signUpSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: '入力項目が足りません。',
    };
  }

  const { email, password } = validatedFields.data;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return {
        message: '既に登録されているユーザーです。',
      };
    }

    await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
      },
    });
  } catch (error) {
    throw error;
  }

  redirect('/login');
}
