import { auth } from '@/auth';
import Link from 'next/link';

export default async function MyPage() {
  const session = await auth();
  return (
    <>
      <div>マイページ</div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <Link href='/'>ホーム</Link>
    </>
  );
}
