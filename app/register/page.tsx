import SignUpForm from '@/app/ui/signup-form';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <>
      <div>
        サインアップページ
        <SignUpForm />
      </div>
      <div className='flex flex-col m-2'>
        <Link href='/login'>ログインページ</Link>
        <Link href='/'>ホーム</Link>
      </div>
    </>
  );
}
