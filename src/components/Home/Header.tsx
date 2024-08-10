'use client';
import { Variants, motion, useAnimate } from 'framer-motion';
import ThemeBtn from '@/components/elements/ThemeBtn/ThemeBtn';

export default function Header() {
  const animateHeader = {
    initial: { opacity: 0, y: 60 },
  };

  return (
    <div className="  text-[var(--primary-color)] ">
      <motion.h1
        className="text-rigth font-[700] flex flex-col items-start max-w-full 
      md:max-w-[43rem]  lg:max-w-none lg:mx-0
      text-[56px] leading-[65px]
      md:text-[130px] md:leading-[124px] 
      lg:text-[180px] lg:leading-[154px] 
      
      "
      >
        <motion.span
          initial={animateHeader.initial}
          animate={{ opacity: 1, y: 1, transition: { ease: [0, 0.71, 0.2, 1.01], delay: 0.1 } }}
          className="tracking-[2px] 
          text-[60px]
      md:text-[130px]  
      lg:text-[180px] 
        md:tracking-[4px] lg:tracking-[2px] text-[var(--secondary-color)]"
        >
          PORTFOLIO{' '}
        </motion.span>
        <motion.span initial={animateHeader.initial} animate={{ opacity: 1, y: 1, transition: { ease: [0, 0.71, 0.2, 1.01], delay: 0.2 } }} className="self-start md:self-end lg:tracking-[0px] ml-[135px] md:ml-0 md:mr-10">
          FRONT
        </motion.span>
        <motion.span
          initial={animateHeader.initial}
          animate={{ opacity: 1, y: 1, transition: { ease: [0, 0.71, 0.2, 1.01], delay: 0.3 } }}
          className="tracking-[1px]  
        lg:tracking-[-3px]"
        
        >
          {'END DEV </>'}
        </motion.span>
      </motion.h1>
      <ThemeBtn />
    </div>
  );
}
