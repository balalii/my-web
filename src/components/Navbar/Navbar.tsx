'use client';
import SOCIAL_LIST from '@/data/SOCIAL_LIST';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false); //ubah warna saat scroll
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      setScrollTop(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollTop]);
  return (
    <header
      className={` z-20 fixed border-gray-300   top-0 left-0 right-0 
     bg-opacity-0 ${!!isScrolled && 'bg-white/80 bg-opacity-90 border-black  border-b backdrop-blur-lg'} `}
    >
      <nav className="container center-row-flex justify-between py-3 md:py-4  ">
        {/* logo */}
        <div className="inline-flex items-center md:block">
          {/* <span className="font-[600] text-2xl tracking-tighter">Iqbal Ali</span> */}
          <Image src={'/me.JPG'} alt="me" width={400} height={400} className="block md:hidden rounded-full mr-3 w-12 h-auto border border-black" />

          <div className="flex flex-col items-start">
            <span className="font-[600] text-[1.2rem]  tracking-tighter">Iqbal Ali</span>
            <span className="text-[0.8rem] -mt-1  text-gray-600">Frontend Developer</span>
          </div>
        </div>
        {/* logo end */}
        {/* List Menu */}
        <div className="hidden md:block">
          <ul className="center-row-flex space-x-10 font-[500] text-base ">
            {SOCIAL_LIST.map((data) => (
              <li key={data.name} className={`${data.name === 'Linkedin' && 'font-[600]'} `}>
                <Link href={data.link} className="hover:underline inline-flex items-center">
                  {data.name}
                  {data.name === 'Linkedin' && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* List Menu end */}
      </nav>
    </header>
  );
}
