'use client';
import React from 'react';
import { useProjectStore } from './ProjectStore';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { log } from 'console';

const ProjectCard = ({ children, gradient, id }: { children: React.ReactNode; id: string; gradient: string }) => {
  const inViewProject = useProjectStore((state) => state.inViewProject);
  const setFullScreenProject = useProjectStore((state) => state.setFullScreenProject);

  const fullScreenProject = useProjectStore((state) => state.fullScreenProject);
  const isFullScreen = fullScreenProject;

  console.log(isFullScreen);

  return (
    <div
      className={`border-none md:before:border-s-2 md:before:border-t-2  before:content-[''] before:px-[3.5rem] before:py-[3.5rem] before:absolute before:z-10
            md:after:border-b-2 md:after:border-e-2 after:content-[''] after:px-[3.5rem] after:py-[3.5rem] after:absolute after:right-0 after:bottom-0 first-letter:  ${
              !isFullScreen ? 'md:before:border-black md:after:border-black' : 'before:border-none md:after:border-none '
            }`}
    >
      <div
        className={`border-none before:rounded-tl-[45px] md:before:border-black md:before:border-s md:before:border-t  before:content-[''] before:px-[3.5rem] before:py-[3.5rem] before:absolute before:z-10
           after:rounded-br-[45px] md:after:border-black md:after:border-b md:after:border-e after:content-[''] after:px-[3.5rem] after:py-[3.5rem] after:absolute after:right-0 after:bottom-0 
            ${!isFullScreen ? 'md:before:border-black md:after:border-black' : 'before:border-none md:after:border-none '}`}
      >
        {/* if not inView */}
        <div
          className={`hidden md:flex absolute inset-0 aspect-square w-full rounded-2xl transition-all  flex-col items-center justify-center
        ${!inViewProject ? 'opacity-100 active-card' : 'opacity-0 pointer-events-none '} `}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-24 h-24 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
          </svg>
        </div>
        {/* if not inView end */}

        {/* card content */}
        <div
          className={`flex flex-col justify-end items-end md:block absolute inset-0 aspect-square w-full rounded-2xl transition-all
          ${inViewProject === id ? 'opacity-100 active-card' : 'opacity-0 pointer-events-none '} `}
        >
          <div className={`gradient hidden md:block absolute inset-0 m-5 rounded-3xl bg-gradient-to-br ${gradient} `} />
          <div className="hidden md:block">{children}</div>
          <button onClick={() => setFullScreenProject(id)} className="show-me-btn -rotate-90 z-20 md:rotate-0 bg-black  text-white rounded-lg absolute -mr-5 md:mr-0 md:bottom-10 md:right-10 px-4 py-2 shadow-lg">
            Show Me
          </button>
        </div>
        {/* card content end*/}
      </div>
    </div>
  );
};

export const Mulks = ({ id }: { id: string }) => {
  const fullScreenProject = useProjectStore((state) => state.fullScreenProject);
  const isFullScreen = fullScreenProject === id;
  return (
    <ProjectCard gradient="from-[#f7f9ff] to-[white]" id={id}>
      <div className="absolute top-[10%] ">
        <div className="flex flex-row justify-center items-center">
          <Image width={500} height={500} src="/project/mulksway/desktop.png" alt="desktop" className={`mix-blend-multiply w-full h-auto transition-all ${isFullScreen ? 'scale-0' : 'scale-100'}`} />
          {/* <Image width={500} height={500} src="/project/mulksway/mobile.png" alt="mobile" className={`mix-blend-multiply w-[50%] h-auto transition-all ${isFullScreen ? 'scale-0' : 'scale-100'}`} /> */}
          {!isFullScreen && (
            <motion.div layoutId="spotify-logo" className="absolute left-[40%] top-32 h-48 w-24 rounded-[96px] bg-[#1bd761] p-3 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path
                  d="M 38.196 21.276 C 30.46 16.682 17.7 16.26 10.314 18.502 C 9.128 18.862 7.875 18.191 7.515 17.005 C 7.155 15.819 7.826 14.566 9.012 14.206 C 17.49 11.632 31.582 12.13 40.488 17.416 C 41.506 18.07 41.823 19.412 41.205 20.452 C 40.587 21.492 39.257 21.856 38.196 21.276 Z M 37.944 28.082 C 37.402 28.962 36.251 29.237 35.37 28.698 C 28.92 24.734 19.086 23.584 11.454 25.9 C 10.806 26.125 10.086 25.977 9.579 25.514 C 9.072 25.052 8.858 24.349 9.023 23.682 C 9.188 23.016 9.704 22.493 10.368 22.32 C 19.084 19.676 29.92 20.956 37.328 25.51 C 38.208 26.05 38.484 27.204 37.944 28.082 Z M 35.006 34.616 C 34.8 34.955 34.467 35.199 34.082 35.292 C 33.696 35.386 33.288 35.322 32.95 35.114 C 27.314 31.67 20.22 30.892 11.866 32.8 C 11.07 32.961 10.291 32.458 10.111 31.667 C 9.93 30.875 10.413 30.084 11.2 29.884 C 20.342 27.794 28.184 28.694 34.51 32.56 C 34.849 32.767 35.091 33.099 35.184 33.485 C 35.277 33.871 35.213 34.278 35.006 34.616 Z M 24 0 C 10.746 0 0 10.746 0 24 C 0 37.256 10.746 48 24 48 C 37.256 48 48 37.256 48 24 C 48 10.746 37.256 0 24 0 Z"
                  fill="hsl(0, 0%, 100%)"
                />
              </svg>
            </motion.div>
          )}
        </div>
      </div>
    </ProjectCard>
  );
};
export const Mand = ({ id }: { id: string }) => {
  return (
    <ProjectCard gradient="from-[#f7f9ff] to-[#b3ffee]" id={id}>
      <span />
    </ProjectCard>
  );
};