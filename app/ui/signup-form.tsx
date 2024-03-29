'use client';

import { useFormState } from 'react-dom';
import { signUp } from '../lib/actions';

export default function SignUpForm() {
  const initialState = { message: null, error: {} };
  const [state, dispatch] = useFormState(signUp, initialState);

  return (
    <form action={dispatch}>
      <div>
        <label htmlFor='email'>Email</label>
        <input id='email' type='email' name='email' placeholder='メールアドレス' required />
        <div>
          {state.errors?.email &&
            state.errors.email.map((error: string) => <p key={error}>{error}</p>)}
        </div>
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input id='password' type='password' name='password' placeholder='パスワード' required />
        <div>
          {state.errors?.password &&
            state.errors.password.map((error: string) => <p key={error}>{error}</p>)}
        </div>
      </div>
      <div>{state.message ? <p>{state.message}</p> : null}</div>
      <button>サインアップ</button>
    </form>
  );
}
