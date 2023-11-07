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
    <label
      className="inline-flex relative z-10  items-center space-x-4 cursor-pointer text-[var(--primary-color)]
     -top-[119px] left-[2rem]
      md:-top-[253px] md:left-[3rem]
      lg:-top-[313px] lg:left-[2rem]
      
      "
    >
      <span className="relative">
        <input id="Toggle1" type="checkbox" className="hidden peer" checked={theTheme !== 'light'} onChange={toggleTheme} />
        <div
          className="rounded-full shadow-inner bg-[var(--primary-color)]
          w-[80px] h-[42px]
          md:w-[200px] md:h-[100px]
          lg:w-[280px] lg:h-[130px]
          "
        ></div>
        <div
          className={`absolute inset-y-0 left-0  rounded-full shadow bg-[var(--background-color)] peer-checked:right-0 peer-checked:left-auto
          w-[32px] h-[32px] m-[5px]
          md:w-[70px] md:h-[70px] md:m-[15px] 
          lg:w-[90px] lg:h-[90px] lg:m-[20px] 
          `}
        ></div>
      </span>
    </label>
  );
}
