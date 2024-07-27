'use client';
import { Variants, motion, useAnimate } from 'framer-motion';
import ThemeBtn from '@/components/ThemeBtn/ThemeBtn';

export default function Header() {
  const animateHeader = {
    initial: { opacity: 0, y: 60 },
  };

  return (
    <div className="  text-[var(--primary-color)] ">
      <motion.h1
        className="text-rigth font-[600] flex flex-col items-start max-w-[22rem] 
      md:max-w-[43rem] mx-auto lg:max-w-none lg:mx-0
      text-[65px] leading-[65px]
      md:text-[140px] md:leading-[134px] 
      lg:text-[190px] lg:leading-[164px] 
      
      "
      >
        <motion.span
          initial={animateHeader.initial}
          animate={{ opacity: 1, y: 1, transition: { ease: [0, 0.71, 0.2, 1.01], delay: 0.1 } }}
          className="tracking-[3px] 
        md:tracking-[4px] lg:tracking-[2px] text-[var(--secondary-color)]"
        >
          PORTFOLIO{' '}
        </motion.span>
        <motion.span initial={animateHeader.initial} animate={{ opacity: 1, y: 1, transition: { ease: [0, 0.71, 0.2, 1.01], delay: 0.2 } }} className="self-end lg:tracking-[0px] ">
          FRONT
        </motion.span>
        <motion.span
          initial={animateHeader.initial}
          animate={{ opacity: 1, y: 1, transition: { ease: [0, 0.71, 0.2, 1.01], delay: 0.3 } }}
          className="tracking-[1px]  
        lg:tracking-[-3px]"
        >
          {'END DEV</>'}
        </motion.span>
      </motion.h1>
      <ThemeBtn />
    </div>
  );
}
