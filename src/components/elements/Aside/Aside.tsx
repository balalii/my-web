'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Aside() {
  const pathname = usePathname();

  const linkActive = 'font-bold text-[var(--secondary-color)]';

  const DATA_LINK = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Project',
      path: '/project',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ];

  return (
    <aside className=" hidden h-[95vh] text-[var(--primary-color)] lg:flex flex-col justify-between top-3 fixed items-start  w-fit">
      <span className="text-xl font-semibold">Iqbal Ali </span>
      <nav>
        <ul className="space-y-5 -mt-20">
          {DATA_LINK.map((data, idx) => (
            <li key={idx} className={`${pathname === data.path && linkActive}`}>
              <Link href={data.path}>{data.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <p className="">
        2022-<span className=" font-bold">{new Date().getFullYear()}</span>
      </p>
    </aside>
  );
}
