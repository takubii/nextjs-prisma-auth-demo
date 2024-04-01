'use client';

import { login } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(login, undefined);

  return (
    <form action={dispatch}>
      <div>
        <label htmlFor='email'>Email</label>
        <input id='email' type='email' name='email' placeholder='メールアドレス' required />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input id='password' type='password' name='password' placeholder='パスワード' required />
      </div>
      <div>{errorMessage && <p>{errorMessage}</p>}</div>
      <button>ログイン</button>
    </form>
  );
}
