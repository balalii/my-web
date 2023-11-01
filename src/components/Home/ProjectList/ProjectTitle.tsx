'use client';
import { useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { useProjectStore } from './store';

export default function ProjectTitle({ children, id }: { children: React.ReactNode; id: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { margin: '-50% 0px -50% -0px' });

  const setInViewProject = useProjectStore((state) => state.setInViewProject);
  const inViewProject = useProjectStore((state) => state.inViewProject);

  useEffect(() => {
    if (isInView) setInViewProject(id);

    if (!isInView && inViewProject === id) setInViewProject(null);
  }, [isInView, id, setInViewProject, inViewProject]);

  return (
    <p
      ref={ref}
      className={`text-[2rem] md:text-[2.7rem] md:pl-0 font-[500] 
              leading-tight tracking-tight mt-10 lg:max-w-4xl
    ${isInView ? 'text-black' : 'text-gray-300'} `}
    >
      {children}
    </p>
  );
}
