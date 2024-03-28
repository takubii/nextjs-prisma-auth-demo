import { prisma } from '@/globals/db';

export default async function Home() {
  const user = await prisma.user.findFirst();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>{JSON.stringify(user)}</div>
    </main>
  );
}
