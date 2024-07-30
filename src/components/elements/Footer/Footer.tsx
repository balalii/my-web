'use client';
import Button from '@/components/elements/Button';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import TextDescription from '../TextDescription';
import Link from 'next/link';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <section className="space-y-10 mt-28 md:mt-38">
      <motion.div ref={ref} className="uppercase text-[4rem] md:text-[10rem] font-bold md:leading-[8rem]">
        <motion.h2 initial={{ opacity: 0, y: 200 }} animate={isInView ? { opacity: 1, y: 0, transition: { ease: [0, 0.71, 0.2, 1.01], delay: 0.3 } } : { opacity: 1, y: 0, transition: { ease: [0, 0.71, 0.2, 1.01], delay: 0.4 } }}>
          Contact
        </motion.h2>
      </motion.div>

      <TextDescription className="indent-20 md:indent-[40%]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo voluptatum, ea eos inventore aliquam culpa beatae iste laudantium minus deserunt sit tempora exercitationem nam vel laboriosam eum officia sunt necessitatibus at.
        Praesentium fugiat incidunt assumenda, asperiores rerum nesciunt dolorem sit amet dolore saepe.
      </TextDescription>

      <div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-10">
        <h4 className="uppercase text-[3rem] md:text-[4rem] font-extrabold md:leading-[8rem] font-sans tracking-tighter">Drop me an</h4>
        <Link href={'/contact'}>
          <motion.div
            initial={{ paddingRight: '3.5rem' }}
            animate={{ paddingRight: isClicked ? '0rem' : '3.5rem', paddingLeft: isClicked ? '3.5rem' : '0rem' }}
            transition={{ duration: 0.3 }}
            className="border-2 border-[var(--primary-color)] bg-[--primary-color] rounded-full cursor-pointer"
            onClick={handleClick}
          >
            <div className="bg-[var(--background-color)] rounded-full p-8 pt-3 pb-5">
              <span className="uppercase font-outline-2 text-[var(--background-color)] text-6xl font-extrabold font-sans">email</span>
            </div>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}

export function FooterLink() {
  return (
    <ul className="text-lg flex flex-row items-center justify-start space-x-8 md:space-x-20 text-[var(--primary-color)] font-medium py-8">
      <li>Instagram//</li>
      <li>GitHub//</li>
      <li>Linkedin//</li>
    </ul>
  );
}
