'use client';
import Button from '@/components/elements/Button';
import TextDescription from '@/components/elements/TextDescription';
import { useThemeStore } from '@/store/ThemeStore';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function Workflow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="space-y-10">
      <motion.div ref={ref} className="uppercase text-[3rem] md:text-[5rem] font-bold md:leading-[8rem]">
        <motion.h2 className="leading-none" initial={{ opacity: 0, y: 200 }} animate={isInView ? { opacity: 1, y: 0, transition: { ease: [0, 0.71, 0.2, 1.01], delay: 0.3 } } : {}}>
          WORKFLOW
        </motion.h2>
      </motion.div>

      <TextDescription className="indent-20 md:indent-[40%]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo voluptatum, ea eos inventore aliquam culpa beatae iste laudantium minus deserunt sit tempora exercitationem nam vel laboriosam eum officia sunt necessitatibus at.
        Praesentium fugiat incidunt assumenda, asperiores rerum nesciunt dolorem sit amet dolore saepe.
      </TextDescription>

      <div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem className=" !border-t border-[var(--primary-color)]" value="item-1">
            <AccordionTrigger>
              <div className="flex flex-row items-center space-x-8 md:space-x-56">
                <span className="uppercase text-2xl">.01</span>
                <span className="uppercase text-2xl">UI/UX designer</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-lg mb-8 mt-4">Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
          <AccordionItem className="  border-[var(--primary-color)]" value="item-2">
            <AccordionTrigger>
              <div className="flex flex-row items-center space-x-8 md:space-x-56">
                <span className="uppercase text-2xl">.02</span>
                <span className="uppercase text-2xl">Web Design</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-lg mb-8 mt-4">Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
          <AccordionItem className="  border-[var(--primary-color)]" value="item-3">
            <AccordionTrigger>
              <div className="flex flex-row items-center space-x-8 md:space-x-56">
                <span className="uppercase text-2xl">.03</span>
                <span className="uppercase text-2xl">Web development</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-lg mb-8 mt-4">Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
