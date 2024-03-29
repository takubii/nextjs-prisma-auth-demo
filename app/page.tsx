import { prisma } from '@/globals/db';
import Link from 'next/link';

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <Link href='/login'>ログイン</Link>
      <Link href='/register'>サインアップ</Link>
    </main>
  );
}
