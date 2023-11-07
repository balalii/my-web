import ThemeBtn from '@/components/ThemeBtn/ThemeBtn';

export default function Header() {
  return (
    <div className="  text-[var(--primary-color)] ">
      <h1
        className="text-rigth font-[600] flex flex-col items-start max-w-[22rem] 
      md:max-w-[43rem] mx-auto lg:max-w-none lg:mx-0
      text-[65px] leading-[65px]
      md:text-[140px] md:leading-[134px] 
      lg:text-[190px] lg:leading-[164px] 
      
      "
      >
        <span className="tracking-[3px] md:tracking-[4px] lg:tracking-[2px]">PORTFOLIO </span>
        <span className="self-end lg:tracking-[0px] ">FRONT</span>
        <span className="tracking-[1px] lg:tracking-[-3px]">{'END DEV</>'}</span>
      </h1>
      <ThemeBtn />
    </div>
  );
}
