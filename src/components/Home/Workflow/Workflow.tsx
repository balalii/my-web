'use client';
import Button from '@/components/elements/Button';
import TextDescription from '@/components/elements/TextDescription';
import { useThemeStore } from '@/store/ThemeStore';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function Workflow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="space-y-10">
      <motion.div ref={ref} className="uppercase text-[3rem] md:text-[5rem] font-semibold md:leading-[8rem]">
        <motion.h2 className="leading-none" initial={{ opacity: 0, y: 200 }} animate={isInView ? { opacity: 1, y: 0, transition: { ease: [0, 0.71, 0.2, 1.01], delay: 0.3 } } : {}}>
          WORKFLOW
        </motion.h2>
      </motion.div>

      <TextDescription className="indent-20 md:indent-[40%]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo voluptatum, ea eos inventore aliquam culpa beatae iste laudantium minus deserunt sit tempora exercitationem nam vel laboriosam eum officia sunt necessitatibus at.
        Praesentium fugiat incidunt assumenda, asperiores rerum nesciunt dolorem sit amet dolore saepe.
      </TextDescription>
    </section>
  );
}
