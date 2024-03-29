import Link from 'next/link';
import SignUpForm from '../ui/signup-form';

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
