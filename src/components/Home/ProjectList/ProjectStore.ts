import { create } from 'zustand';

type ProjectStore = {
  inViewProject: string | null;
  setInViewProject: (project: string | null) => void;

  fullScreenProject: string | null;
  setFullScreenProject: (project: string | null) => void;

  lastFullscreenProject: string | null;
  setLastFullscreenProject: (project: string | null) => void;
};

export const useProjectStore = create<ProjectStore>((set) => ({
  // scroll state
  inViewProject: null,
  setInViewProject: (project: string | null) => set({ inViewProject: project }),

  // Visual state
  fullScreenProject: null,
  setFullScreenProject: (project: string | null) => {
    set({ fullScreenProject: project });
    if (project !== null) {
      set({ lastFullscreenProject: project });
    }
  },

  // last Full screen
  lastFullscreenProject: null,
  setLastFullscreenProject: (project: string | null) => set({ lastFullscreenProject: project }),
}));
