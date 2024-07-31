'use client';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { DATA_PROJECT } from '../Home/Project/DATA_PROJECT';
import { useThemeStore } from '@/store/ThemeStore';

export default function ProjectPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const theTheme = useThemeStore((state) => state.theTheme);

  return (
    <section className="space-y-5">
      <div className=" pb-8 border-b border-[var(--primary-color)]">
        <motion.div ref={ref} className="uppercase text-[3rem] md:text-[5rem] font-bold md:leading-[8rem]">
          <motion.h2 className="leading-none" initial={{ opacity: 0, y: 200 }} animate={isInView ? { opacity: 1, y: 0, transition: { ease: [0, 0.71, 0.2, 1.01], delay: 0.3 } } : {}}>
            PROJECTS
          </motion.h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 gap-10 hover:cursor-pointer">
        {DATA_PROJECT.map((data, idx) => (
          <div key={idx} className="space-y-4 group">
            <ul className="flex flex-row space-x-3 w-full flex-wrap">
              {data.tag.map((data, idx) => (
                <li key={idx} className="border border-[var(--primary-color)] px-3 py-1 rounded-full uppercase">
                  {data}
                </li>
              ))}
            </ul>
            <div className="w-full h-[24rem]  bg-gray-300/10 col-span-1 " style={{ clipPath: 'polygon(84% 0, 100% 16%, 100% 100%, 0 100%, 0 0)' }}>
              <Image src={data.img} width={1000} height={1000} alt={data.title} className="grayscale group-hover:grayscale-0 object-cover w-full h-full" />
            </div>
            <h2 className="font-medium text-4xl md:pr-10 font-montserrat leading-none uppercase">{data.title}</h2>
          </div>
        ))}

        {DATA_PROJECT.length % 2 != 0 && (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <Image src={'/assets/oddCardImg.png'} alt="card" width={1000} height={1000} className={`${theTheme === 'light' && 'invert'}  w-full h-full aspect-square`} />
          </div>
        )}
      </div>
    </section>
  );
}
