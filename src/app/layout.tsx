import type { Metadata } from 'next';
// import { Inter } from 'next/font/google'
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Iqbal Ali',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Tempore veritatis temporibus ea.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className=" font-montserrat bg-[#F8F0E5]">
        <Navbar />
        <main className="min-h-screen pt-[4.5rem] md:pt-[5rem]   space-y-36 md:space-y-40">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
