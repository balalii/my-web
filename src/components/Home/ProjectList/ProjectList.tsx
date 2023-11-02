'use client';
import { stagger, useAnimate } from 'framer-motion';
import PROJECT_LIST from '../../../data/PROJECT_LIST';
import ProjectTitle from './ProjectTitle';
import { useProjectStore } from './ProjectStore';
import { useEffect } from 'react';
import { useEscapePress } from '@/components/hooks/use-escape-press';
import { useHidePageOverflow } from '@/components/hooks/toogle-page-overflow';

export default function ProjectList() {
  // animate
  const [scope, animate] = useAnimate();
  const fullscreenProject = useProjectStore((state) => state.fullScreenProject);
  const lastFullscreenProject = useProjectStore((state) => state.lastFullscreenProject);
  const setFullscreenProject = useProjectStore((state) => state.setFullScreenProject);

  // hooks
  const onEscapePress = () => {
    if (fullscreenProject) setFullscreenProject(null);
  };

  useEscapePress(onEscapePress);
  useHidePageOverflow(!!fullscreenProject);

  useEffect(() => {
    if (fullscreenProject) {
      animate([
        ['.project-title', { opacity: 0, x: '-200px' }, { duration: 0.3, delay: stagger(0.05) }],
        [`.visual-${lastFullscreenProject}`, { opacity: 1, scale: 1, pointerEvents: 'auto' }, { at: '<' }],
        ['.active-card .gradient', { opacity: 0, scale: 0 }, { at: '<' }],
        ['.active-card .show-me-btn', { opacity: 0 }, { at: '<' }],
        ['.back-to-site-btn', { opacity: 1, y: '0px' }, { at: '<', duration: 0.3 }],
      ]);
    } else {
      animate([
        ['.project-title', { opacity: 1, x: '0px' }, { duration: 0.3, delay: stagger(0.05) }],
        [`.visual-${lastFullscreenProject}`, { opacity: 0, scale: 0.75, pointerEvents: 'none' }, { at: '<' }],
        ['.active-card .gradient', { opacity: 1, scale: 1 }, { at: '<' }],
        ['.back-to-site-btn', { opacity: 0, y: '300px' }, { at: '<', duration: 0.3 }],
        ['.active-card .show-me-btn', { opacity: 1 }],
      ]);
    }
  }, [animate, fullscreenProject, lastFullscreenProject]);

  return (
    <section ref={scope} className="container ">
      {PROJECT_LIST.map((data, idx) => (
        <data.visual id={data.name} key={idx} />
      ))}
      <button className="back-to-site-btn fixed bottom-0 left-1/2 -translate-x-1/2 z-10 opacity-0 " onClick={() => setFullscreenProject(null)}>
        Back to site
      </button>
      <div className="flex w-full gap-10 md:gap-20 items-start  md:px-10 lg:px-14">
        <div className="w-full py-[50vh]">
          <ul>
            {PROJECT_LIST.map((data, idx) => (
              <li key={idx}>
                <ProjectTitle id={data.name}>{data.desc}</ProjectTitle>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sticky  flex top-8 h-screen items-center justify-end flex-1">
          <div className="relative line-clamp-5 aspect-square w-[6.5rem] h-[20rem] md:w-[24rem] md:h-auto   [&:has(>_.active-card)]:bg-transparent z-10">
            {PROJECT_LIST.map((data, idx) => (
              <data.card key={idx} id={data.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
