'use client';

import { useThemeStore } from '@/store/ThemeStore';
import { motion, useAnimate } from 'framer-motion';
import { useEffect } from 'react';
  
export default function ThemeBtn() {
  const theTheme = useThemeStore((state) => state.theTheme);
  const setTheTheme = useThemeStore((state) => state.setTheTheme);

  const [scope, animate] = useAnimate();

  const toggleTheme = (event: any) => {
    // event.preventDefault();
    const newTheme = theTheme === 'light' ? 'dark' : 'light';

    setTheTheme(newTheme);
  };

  useEffect(() => {
    const enterAnimation = async () => {
      if (theTheme === 'light') {
        await animate('.btnTheme', { right: 0, left: 'auto', }, { type: 'spring', duration: 1 });
      } else {
        await animate('.btnTheme', { right: 0, left: 0, }, { type: 'spring', duration: 1 });     
      }
    };
    enterAnimation();
  }, [animate, theTheme]);

  return (
    <motion.label
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: [0.9, 1.1, 1], transition: { ease: [0, 0.71, 0.2, 1.01], delay: 0.2, duration: 0.4 } }}
      ref={scope}
      className="inline-flex relative z-10  items-center space-x-4 cursor-pointer text-[var(--primary-color)]
     -top-[119px] left-[2rem]
      md:-top-[253px] md:left-[3rem]
      lg:-top-[313px] lg:left-[2rem]
      
      "
    >
      <span className="relative">
        <input id="Toggle1" type="checkbox" className="hidden peer" checked={theTheme !== 'light'} onChange={toggleTheme} />
        <div
          className="rounded-full shadow-inner bg-[var(--primary-color)]
          w-[80px] h-[42px]
          md:w-[200px] md:h-[100px]
          lg:w-[280px] lg:h-[130px]
          "
        ></div>
        <motion.div
          initial={{ left: 0, rotate: 0 }}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.9 }}
          className={`btnTheme flex flex-col items-center justify-center text-8xl text-center
          absolute inset-y-0 left-0  rounded-full  
          w-[32px] h-[32px] m-[5px]
          md:w-[70px] md:h-[70px] md:m-[15px] 
          lg:w-[90px] lg:h-[90px] lg:m-[20px] 
          `}
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [0, 1.1, 1], transition: { ease: [0, 0.71, 0.2, 1.01], delay: 0.4, duration: 0.4 } }}
            className="-mt-1 lg:-mt-2 
          text-3xl md:text-7xl xl:text-8xl"
          >
            {theTheme === 'dark' ? '🌚' : '🌞'}
          </motion.div>
        </motion.div>
      </span>
    </motion.label>
  );
}
