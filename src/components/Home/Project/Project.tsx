'use client';
import Button from '@/components/elements/Button';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function Project() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="space-y-10">
      <motion.div ref={ref} className="uppercase text-[4rem] md:text-[10rem] font-semibold md:leading-[8rem]">
        <motion.h2 initial={{ opacity: 0, y: 200 }} animate={isInView ? { opacity: 1, y: 0, transition: { ease: [0, 0.71, 0.2, 1.01], delay: 0.3 } } : {}}>
          Selected
        </motion.h2>{' '}
        <br />
        <motion.h2 className="-mt-[8rem] md:-mt-[8rem]" initial={{ opacity: 0, y: 200 }} animate={isInView ? { opacity: 1, y: 0, transition: { ease: [0, 0.71, 0.2, 1.01], delay: 0.7 } } : {}}>
          projects
        </motion.h2>
      </motion.div>

      <div className="min-h-screen space-y-6">
        <div className="border-t border-[var(--secondary-color)]">
          {/* card1 */}
          <div className="grid grid-cols-9 uppercase gap-y-5 md:gap-x-3 !font-montserrat pt-4 pb-4 !border-b border-[var(--secondary-color)]">
            <div className=" col-span-full md:col-span-3">
              <h3 className="font-medium text-4xl md:pr-10 font-montserrat">Geo Thermal complex</h3>
            </div>

            <div className="order-3 md:order-2 col-span-full md:col-span-2">
              <ul className="text-lg  font-medium flex flex-row md:flex-col flex-wrap space-x-3 md:space-x-0">
                <li>Redesign concelit</li>
                <li>Ui/ux</li>
              </ul>
            </div>

            <div className="order-2 md:order-3 col-span-full md:col-span-4 flex flex-row items-start justify-center md:ml-24">
              <Image className="w-full md:max-h-96 object-cover " src={'/project/1.png'} width={1000} height={1000} alt="project" />
            </div>
          </div>

          {/* card 2 */}
          <div className="grid grid-cols-9 uppercase gap-y-5 md:gap-x-3 !font-montserrat pt-4 pb-4 !border-b border-[var(--secondary-color)]">
            <div className=" col-span-full md:col-span-3">
              <h3 className="font-medium text-4xl md:pr-10 font-montserrat">Geo Thermal complex</h3>
            </div>

            <div className="order-3 md:order-2 col-span-full md:col-span-2">
              <ul className="text-lg  font-medium flex flex-row md:flex-col flex-wrap space-x-3 md:space-x-0">
                <li>Redesign concelit</li>
                <li>Ui/ux</li>
              </ul>
            </div>

            <div className="order-2 md:order-3 col-span-full md:col-span-4 flex flex-row items-start justify-center md:ml-24">
              <Image className="w-full md:max-h-96 object-cover " src={'/project/Deadpool.jpg'} width={1000} height={1000} alt="project" />
            </div>
          </div>

          {/* card 3 */}
          <div className="grid grid-cols-9 uppercase gap-y-5 md:gap-x-3 !font-montserrat pt-4 pb-4 !border-b border-[var(--secondary-color)]">
            <div className=" col-span-full md:col-span-3">
              <h3 className="font-medium text-4xl md:pr-10 font-montserrat">Geo Thermal complex</h3>
            </div>

            <div className="order-3 md:order-2 col-span-full md:col-span-2">
              <ul className="text-lg  font-medium flex flex-row md:flex-col flex-wrap space-x-3 md:space-x-0">
                <li>Redesign concelit</li>
                <li>Ui/ux</li>
              </ul>
            </div>

            <div className="order-2 md:order-3 col-span-full md:col-span-4 flex flex-row items-start justify-center md:ml-24">
              <Image className="w-full md:max-h-96 object-cover " src={'/project/me2.png'} width={1000} height={1000} alt="project" />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center ">
          <Button>See All Projects</Button>
        </div>
      </div>
    </section>
  );
}
