import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Prisma Auth Demo',
  description: 'Prisma and Next Auth App with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body>{children}</body>
    </html>
  );
}
