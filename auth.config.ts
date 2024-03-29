import { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnSignUp = nextUrl.pathname.startsWith('/register');

      if (isLoggedIn) {
        return true;
      } else if (isOnSignUp) {
        return true;
      } else {
        return false;
      }
    },
  },
  providers: [],
} satisfies NextAuthConfig;
