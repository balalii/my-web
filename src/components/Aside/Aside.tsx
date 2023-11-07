export default function Aside() {
  return (
    <aside className="  h-[95vh] text-[var(--primary-color)] flex flex-col justify-between top-3 fixed items-start  w-fit">
      <span className="text-xl font-semibold">Iqbal Ali </span>
      <nav>
        <ul className="space-y-4 -mt-20">
          <li className="font-bold">Home</li>
          <li>Project</li>
          <li>Contact</li>
        </ul>
      </nav>
      <span>2022-{new Date().getFullYear()}</span>
    </aside>
  );
}
