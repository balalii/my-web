'use client';
import { useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { useProjectStore } from './ProjectStore';

export default function ProjectTitle({ children, id }: { children: React.ReactNode; id: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: '-50% 0px -50% -0px' });

  const setInViewProject = useProjectStore((state) => state.setInViewProject);
  const inViewProject = useProjectStore((state) => state.inViewProject);

  useEffect(() => {
    if (isInView) setInViewProject(id);

    if (!isInView && inViewProject === id) setInViewProject(null);
  }, [isInView, id, setInViewProject, inViewProject]);

  return (
    <div ref={ref} className="lg:max-w-sm project-title py-10">
      <h2
        className={` text-[2rem] md:text-[2rem] md:pl-0 font-[500] 
              leading-tight tracking-tight mt-10 lg:max-w-xs
    ${isInView ? 'text-black' : 'text-gray-300'} `}
      >
        {children}
      </h2>
      <p className={` ${isInView ? 'text-gray-600' : 'text-gray-300'}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora corporis ut sed molestias, fugiat ullam non.</p>
    </div>
  );
}
