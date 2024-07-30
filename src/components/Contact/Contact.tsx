'use client';
import Button, { ButtonBorder } from '@/components/elements/Button';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import InputForm, { InputTextAreaForm } from '../elements/InputForm';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <section>
      <div className="md:w-[650px] space-y-20 ">
        <motion.div ref={ref} className="uppercase text-[4rem] md:text-[10rem] font-bold md:leading-[8rem]">
          <motion.h2 initial={{ opacity: 0, y: 200 }} animate={isInView ? { opacity: 1, y: 0, transition: { ease: [0, 0.71, 0.2, 1.01], delay: 0.1 } } : { opacity: 1, y: 0, transition: { ease: [0, 0.71, 0.2, 1.01], delay: 0.3 } }}>
            Contact
          </motion.h2>
        </motion.div>

        <div className="space-y-12">
          <div className="grid grid-cols-2 gap-10">
            <div className="col-span-full md:col-span-1">
              <InputForm placeholder="Your Name" id="name" />
            </div>
            <div className="col-span-full md:col-span-1">
              <InputForm placeholder="Your Email" id="email" />
            </div>
            <div className="col-span-full md:col-span-2">
              <InputTextAreaForm rows={3} placeholder="Your Message" id="name" />
            </div>
          </div>

          <div>
            <ButtonBorder>Send Email</ButtonBorder>
          </div>
        </div>
      </div>
    </section>
  );
}
