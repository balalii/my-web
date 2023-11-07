import ThemeBtn from '@/components/ThemeBtn/ThemeBtn';

export default function Header() {
  return (
    <div className="  text-[var(--primary-color)] ">
      <h1 className="text-rigth text-[190px] leading-[164px] font-[500] flex flex-col items-start">
        <span className="tracking-[2px]">PORTFOLIO </span>
        <span className="self-end tracking-[0px] ">FRONT</span>
        <span className="tracking-[-3px]">{'END DEV</>'}</span>
      </h1>
      <ThemeBtn />
    </div>
  );
}
