import { logout } from '@/app/lib/actions';
import { auth } from '@/auth';
import Link from 'next/link';

export default async function Home() {
  const session = await auth();

  return (
    <main className='flex min-h-screen flex-col items-center'>
      {session ? (
        <div className='flex flex-col items-center'>
          <h1 className='my-6 w-full text-center text-2xl'>TOPページ</h1>
          <div className='flex flex-col text-center'>
            <Link
              href='/mypage'
              className='bg-blue-500 text-white rounded-lg px-8 py-2 hover:bg-blue-400 focus-visible:outline-offset-2'
            >
              マイページ
            </Link>
            <form action={logout}>
              <button className='bg-red-500 text-white rounded-lg px-8 py-2 mt-2 hover:bg-red-400 focus-visible:outline-offset-2'>
                ログアウト
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className='flex flex-col items-center'>
          <h1 className='my-6 w-full text-center text-2xl'>認証ページ</h1>
          <div className='flex flex-col text-center'>
            <Link
              href='/login'
              className='bg-blue-500 text-white rounded-lg px-8 py-2 hover:bg-blue-400 focus-visible:outline-offset-2'
            >
              ログイン
            </Link>
            <Link
              href='/register'
              className='bg-blue-500 text-white rounded-lg px-8 py-2 mt-2 hover:bg-blue-400 focus-visible:outline-offset-2'
            >
              サインアップ
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
