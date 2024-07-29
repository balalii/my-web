'use client';
import Button from '@/components/elements/Button';
import { useThemeStore } from '@/store/ThemeStore';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import CardCapabilites from './CardCapabilites';

export default function Capabilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="space-y-10">
      <motion.div ref={ref} className="uppercase text-[3rem] md:text-[5rem] font-semibold md:leading-[8rem]">
        <motion.h2 className="leading-none" initial={{ opacity: 0, y: 200 }} animate={isInView ? { opacity: 1, y: 0, transition: { ease: [0, 0.71, 0.2, 1.01], delay: 0.3 } } : {}}>
          My Capabilities
        </motion.h2>
      </motion.div>

      <div className="md:h-64">
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-7  md:z-50 md:absolute ">
          <CardCapabilites />
          <CardCapabilites />
          <CardCapabilites />
          <CardCapabilites />
        </div>
      </div>
    </section>
  );
}
