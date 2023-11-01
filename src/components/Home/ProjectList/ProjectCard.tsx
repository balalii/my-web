'use client';
import { useInView } from 'framer-motion';
import React, { useRef } from 'react';
import { useProjectStore } from './store';

export default function ProjectCard({ children, id }: { children: React.ReactNode; id: string }) {
  const inViewProject = useProjectStore((state) => state.inViewProject);

  return (
    <div
      className={` absolute inset-0 aspect-square w-full bg-slate-400 rounded-2xl transition-all
        ${inViewProject === id ? 'opacity-100' : 'opacity-0'} `}
    >
      {children}
    </div>
  );
}
