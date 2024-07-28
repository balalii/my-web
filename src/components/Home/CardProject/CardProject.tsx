'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CardProject() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="space-y-5 md:space-y-8">
      <motion.div ref={ref} className="uppercase text-[4rem] md:text-[10rem] font-semibold md:leading-[8rem]">
        <motion.h2 initial={{ opacity: 0, y: 200 }} animate={isInView ? { opacity: 1, y: 0, transition: { ease: [0, 0.71, 0.2, 1.01], delay: 0.1 } } : {}}>
          Selected
        </motion.h2>{' '}
        <br />
        <motion.h2 className="-mt-[8rem] md:-mt-[8rem]" initial={{ opacity: 0, y: 200 }} animate={isInView ? { opacity: 1, y: 0, transition: { ease: [0, 0.71, 0.2, 1.01], delay: 0.5 } } : {}}>
          projects
        </motion.h2>
      </motion.div>

      <div className="min-h-screen"></div>
    </section>
  );
}
