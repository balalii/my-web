import type { Metadata } from 'next';
import './globals.css';
import Aside from '@/components/elements/Aside/Aside';
import ThemeProvider from '@/provider/ThemeProvider';
import Footer from '@/components/Footer/Footer';

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Iqbal Ali',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Tempore veritatis temporibus ea.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ThemeProvider className="  container  bg-[var(--background-color)]">
        <main className="flex-1 font-montserrat flex flex-col-reverse lg:flex-row justify-between pt-8 lg:p-4">
          <Aside />
          <div className="ml-auto w-full lg:w-[885px] ">
            {children}
            <Footer />
          </div>
        </main>
      </ThemeProvider>
    </html>
  );
}
