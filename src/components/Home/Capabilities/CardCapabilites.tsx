'use client';
import { useThemeStore } from '@/store/ThemeStore';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ICapabilities } from './DATA_CAPABILITES';

export default function CardCapabilities({ data, idx }: { data: ICapabilities; idx: number }) {
  const theTheme = useThemeStore((state) => state.theTheme);

  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="group h-64 ">
      <motion.div
        initial={{ rotate: 0 }}
        animate={isHovered && !isMobile ? { rotate: -10 } : { rotate: 0 }}
        transition={{
          duration: 0.3,
          ease: [0.42, 0, 0.58, 1],
          rotate: {
            type: 'spring',
            damping: 1,
            stiffness: 50,
            restDelta: 0.2,
          },
        }}
        className="transition-all md:w-48 h-64 hover:cursor-pointer border border-[var(--primary-color)] p-5 md:p-3 flex flex-col space-y-5 items-center justify-between md:justify-center"
      >
        <span className="self-start font-bold">0{idx}/</span>
        <Image src={data.img} width={500} height={500} className={`w-24 h-24 object-contain md:!mt-10 ${theTheme === 'dark' && 'filter invert'}`} alt={data.title} />
        <p className="uppercase font-bold pb-5 font-sans text-lg">{data.title}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -190, rotate: 0 }}
        animate={isHovered ? (!isMobile ? { opacity: 1, y: -190, rotate: 10 } : { opacity: 1, y: -250, rotate: 0 }) : { opacity: 0, y: -190, rotate: 0 }}
        transition={{
          duration: 0.2,
          ease: [0.42, 0, 0.58, 1],
          rotate: {
            type: 'spring',
            damping: 1,
            stiffness: 50,
            restDelta: 0.2,
          },
        }}
        className={`group-hover:cursor-pointer transition-all bg-[var(--primary-color)] py-7 text-[var(--background-color)] flex flex-col justify-between md:w-48 h-64 p-5 md:p-3`}
      >
        <h3 className="uppercase font-bold font-sans text-xl">{data.title}</h3>
        <p className="text-base md:text-xs font-sans">{data.desc}</p>
      </motion.div>
    </motion.div>
  );
}
