export default function Button({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <button
      className={`px-7 py-2 justify-center pb-2.5 text-xl  border border-[var(--primary-color)] bg-[var(--primary-color)] rounded-[13px] uppercase  
        text-[var(--background-color)] inline-flex items-center font-sans  font-semibold transition-all ${className}`}
    >
      {children}
    </button>
  );
}

export function ButtonBorder({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <button
      className={`px-7 py-2 justify-center pb-2.5 text-xl   border border-[var(--primary-color)] rounded-[13px] uppercase  inline-flex items-center font-sans  font-semibold transition-all
      hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] ${className}`}
    >
      {children}
    </button>
  );
}
