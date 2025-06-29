'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import 'react-multi-carousel/lib/styles.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { changeTheme } from '@/utility/theme';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      changeTheme(theme);
    } else {
      localStorage.setItem('theme', 'dark1');
    }
  }, []);

  return (
    <html lang="en" data-theme="dark1">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
