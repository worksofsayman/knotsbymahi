import './globals.css';
import type { Metadata } from 'next';
import Head from "next/head";
import { Inter } from 'next/font/google';
import './public/favicon.ico';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Knots by Mahi - Online',
  description: 'Beautiful handmade products crafted with love. Discover unique wool accessories, flower kletchers, and custom gift hampers.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}