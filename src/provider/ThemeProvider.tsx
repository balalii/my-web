'use client';
import { useThemeStore } from '@/store/ThemeStore';
import { useEffect } from 'react';

export default function ThemeProvider({ children, className }: { children: React.ReactNode; className: string }) {
  const theTheme = useThemeStore((state) => state.theTheme);
  const setTheTheme = useThemeStore((state) => state.setTheTheme);

  useEffect(() => {
    if (!theTheme) {
      setTheTheme(window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    }
  }, [setTheTheme, theTheme]);

  return (
    <body data-theme={theTheme} className="bg-[var(--background-color)]">
      <div className={className}>{children}</div>
    </body>
  );
}
