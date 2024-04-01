import { logout } from '@/app/lib/actions';
import { auth } from '@/auth';
import Link from 'next/link';

export default async function Home() {
  const session = await auth();

  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      {session ? (
        <>
          <Link href='/mypage'>マイページ</Link>
          <form action={logout}>
            <button>ログアウト</button>
          </form>
        </>
      ) : (
        <>
          <Link href='/login'>ログイン</Link>
          <Link href='/register'>サインアップ</Link>
        </>
      )}
    </main>
  );
}
