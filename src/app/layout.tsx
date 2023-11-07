import type { Metadata } from 'next';
import './globals.css';
import Aside from '@/components/Aside/Aside';

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Iqbal Ali',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Tempore veritatis temporibus ea.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme={'lighr'}>
      <body className=" font-montserrat flex flex-col-reverse lg:flex-row justify-between container  bg-[var(--background-color)]">
        <main className="flex-1  ">
          <Aside />
          <div className="ml-auto w-[885px] ">{children}</div>
        </main>
      </body>
    </html>
  );
}
