import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
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
  title: 'Karsa Collective — Space, Visual, & Web Studio',
  description:
    'Multi-disciplinary creative studio by Bayu (Visual & Brand), Fadil (Spatial & Architecture), and Igo (Web Development).',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fbfbfa]`}>
        {children}
      </body>
    </html>
  );
}
