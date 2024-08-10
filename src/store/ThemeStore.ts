import { create } from 'zustand';

type ThemeStore = {
  theTheme: string | null;
  setTheTheme: (theme: string | null) => void;
};

// const themeNow = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
export const useThemeStore = create<ThemeStore>((set) => ({
  // theTheme: null, //default by system
  theTheme: 'light', //manual
  setTheTheme: (theme: string | null) => set({ theTheme: theme }),
}));
