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
      <div className="w-full h-[13rem] md:h-[25rem] bg-[url('/project/bgProject.jpg')] bg-cover rounded-[3rem] md:rounded-[6rem] object-cover shadow-[inset_0px_0px_5px_0px_rgba(0,0,0,47)] bg-[var(--primary-color)] md:!mt-6" />
      <div className=" py-5 md:py-8 border-b border-[var(--primary-color)]">
        <motion.div ref={ref} className="uppercase text-[3rem] md:text-[5rem] font-bold md:leading-[8rem]">
          <motion.h2 className="leading-none" initial={{ opacity: 0, y: 200 }} animate={isInView ? { opacity: 1, y: 0, transition: { ease: [0, 0.71, 0.2, 1.01], delay: 0.3 } } : {}}>
            PROJECTS
          </motion.h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-6 md:gap-y-14 hover:cursor-pointer border-b border-[var(--primary-color)] pb-6">
        {DATA_PROJECT.map((data, idx) => (
          <div key={idx} className="space-y-4 group grid gap-y-5">
            <ul className="flex flex-row space-x-3 w-full flex-wrap order-3 md:order-1">
              {data.tag.map((data, idx) => (
                <li key={idx} className="border border-[var(--primary-color)] px-3 py-1 rounded-full uppercase text-sm">
                  {data}
                </li>
              ))}
            </ul>
            <Image
              src={data.img}
              width={1000}
              height={1000}
              alt={data.title}
              className="grayscale group-hover:grayscale-0 w-full md:!mt-0 h-[19rem] md:h-[24rem] object-cover order-1 md:order-2 bg-gray-300/10 col-span-1 rounded-[5px] rounded-tr-[3rem] md:rounded-tr-[4.7rem] border border-[var(--primary-color)]"
            />
            <h2 className="font-medium order-2 md:order-3 text-3xl md:text-4xl md:pr-10 font-sans leading-none uppercase !mt-0">{data.title}</h2>
          </div>
        ))}

        {DATA_PROJECT.length % 2 != 0 && (
          <div className=" flex-col items-center justify-center w-full h-full hidden md:flex">
            <Image src={'/assets/oddCardImg.png'} alt="card" width={1000} height={1000} className={`${theTheme === 'light' && 'invert'}  w-full h-full aspect-square`} />
          </div>
        )}
      </div>
    </section>
  );
}
