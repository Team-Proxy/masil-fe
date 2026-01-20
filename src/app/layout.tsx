import { Geist, Geist_Mono } from 'next/font/google';
import Head from 'next/head';

import TanstackProvider from '@/providers/tanstackProvider';

import type { Metadata } from 'next';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '마실',
  description: '40·50·60대를 위한 맞춤 인연 매칭 플랫폼',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div id="app">
          <TanstackProvider>{children}</TanstackProvider>
        </div>
      </body>
    </html>
  );
}
