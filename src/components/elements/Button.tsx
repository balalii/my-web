export default function Button({ children, link }: { children: React.ReactNode; link?: string }) {
  return (
    <a href={link}>
      <button
        className="px-7 py-2 pb-2.5 border border-[var(--primary-color)] bg-[var(--primary-color)] rounded-[13px] uppercase  
        text-[var(--background-color)] inline-flex items-center font-sans  font-semibold transition-all
      "
      >
        {children}
      </button>
    </a>
  );
}

export function ButtonBorder({ children, link }: { children: React.ReactNode; link?: string }) {
  return (
    <a href={link}>
      <button
        className="px-7 py-2 pb-2.5 border border-[var(--primary-color)] rounded-[13px] uppercase  inline-flex items-center font-sans  font-semibold transition-all
      hover:bg-[var(--primary-color)] hover:text-[var(--background-color)]
      "
      >
        {children}
      </button>
    </a>
  );
}