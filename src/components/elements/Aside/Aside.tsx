export default function Aside() {
  return (
    <aside className=" hidden h-[95vh] text-[var(--primary-color)] lg:flex flex-col justify-between top-3 fixed items-start  w-fit">
      <span className="text-xl font-semibold">Iqbal Ali </span>
      <nav>
        <ul className="space-y-3 -mt-20">
          <li className="font-extrabold text-[var(--secondary-color)]">Home</li>
          <li>Project</li>
          <li>Contact</li>
        </ul>
      </nav>
      <p className="">
        2022-<span className=" text-[var(--secondary-color)]">{new Date().getFullYear()}</span>
      </p>
    </aside>
  );
}
