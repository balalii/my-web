'use client';

import { useThemeStore } from '@/store/ThemeStore';

export default function ThemeBtn() {
  const theTheme = useThemeStore((state) => state.theTheme);
  const setTheTheme = useThemeStore((state) => state.setTheTheme);

  const toggleTheme = (event: any) => {
    // event.preventDefault();
    const newTheme = theTheme === 'light' ? 'dark' : 'light';
    setTheTheme(newTheme);
  };

  return (
    <label className="inline-flex relative z-10 -top-[313px] left-[2rem]  items-center space-x-4 cursor-pointer text-[var(--primary-color)]">
      <span className="relative">
        <input id="Toggle1" type="checkbox" className="hidden peer" checked={theTheme !== 'light'} onChange={toggleTheme} />
        <div className="w-[280px] h-[130px] rounded-full shadow-inner bg-[var(--primary-color)]"></div>
        <div className={`absolute inset-y-0 left-0  w-[90px] h-[90px] m-[20px] rounded-full shadow bg-[var(--background-color)] peer-checked:right-0 peer-checked:left-auto`}></div>
      </span>
    </label>
  );
}
