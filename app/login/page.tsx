import Link from 'next/link';

export default function LoginPage() {
  return (
    <>
      <div>ログインページ</div>
      <div className='flex flex-col w-full mt-2'>
        <Link href='/register'>ユーザー登録</Link>
        <Link href='/'>ホーム</Link>
      </div>
    </>
  );
}
