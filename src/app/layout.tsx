import type { Metadata } from 'next';
import './globals.css';
import Aside from '@/components/Aside/Aside';
import ThemeProvider from '@/provider/ThemeProvider';

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Iqbal Ali',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Tempore veritatis temporibus ea.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ThemeProvider className="  container  bg-[var(--background-color)]">
        <main className="flex-1 font-montserrat flex flex-col-reverse lg:flex-row justify-between p-4">
          <Aside />
          <div className="ml-auto w-[885px] ">{children}</div>
        </main>
      </ThemeProvider>
    </html>
  );
}
