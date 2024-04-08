Next.js, Prisma, NextAuth v5 を使った認証デモアプリ

## Getting Started

```zsh
npm install
```

```zsh
npx prisma migrate dev
```

```zsh
touch .env.local
openssl rand -base64 32
```

`.env.local`に先ほど作成したランダムな値を入力します。

```.env.local
AUTH_SECRET=secret
```

```zsh
npm run dev
```

## Learn More

以下を参考にしてください。

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [NextAuth v5 Documentation](https://authjs.dev/guides)
- [Prisma Documentation](https://www.prisma.io/docs)
