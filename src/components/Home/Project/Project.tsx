'use client';
import Button from '@/components/elements/Button';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { DATA_PROJECT } from './DATA_PROJECT';
import ProjectCard from './ProjectCard';

export default function Project() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="space-y-10">
      <motion.div ref={ref} className="uppercase text-[4rem] md:text-[10rem] font-bold md:leading-[8rem]">
        <motion.h2 initial={{ opacity: 0, y: 200 }} animate={isInView ? { opacity: 1, y: 0, transition: { ease: [0, 0.71, 0.2, 1.01], delay: 0.3 } } : {}}>
          Selected
        </motion.h2>{' '}
        <br />
        <motion.h2 className="-mt-[8rem] md:-mt-[8rem]" initial={{ opacity: 0, y: 200 }} animate={isInView ? { opacity: 1, y: 0, transition: { ease: [0, 0.71, 0.2, 1.01], delay: 0.7 } } : {}}>
          projects
        </motion.h2>
      </motion.div>

      <div className=" space-y-6">
        <div className="border-t border-[var(--primary-color)]">
          {/* card1 */}

          {DATA_PROJECT.map((data, idx) => (
            <ProjectCard key={idx} data={data} />
          ))}
        </div>
        <div className="w-full flex justify-center items-center ">
          <Button>See All Projects</Button>
        </div>
      </div>
    </section>
  );
}
