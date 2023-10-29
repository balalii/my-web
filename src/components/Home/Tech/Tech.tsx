import Image from 'next/image';
import Link from 'next/link';
import TECH_LIST from './../../../data/TECH_LIST';

export default function Tech() {
  return (
    <section className="container">
      <h2 className="text-4xl md:text-3xl md:text-[2.5rem] font-[600] text-center">
        <span className="hidden md:inline-flex">My</span> Tech Frontend
      </h2>
      <ul className="flex flex-row justify-center items-center  flex-wrap max-w-4xl mx-auto mt-8 md:mt-10">
        {TECH_LIST.map((data) => (
          <li key={data.name} className="center-row-flex  my-3 mx-5 md:mx-10 lg:mx-16">
            <Image src={data.img} height={130} width={130} alt={data.name} title={data.name} className={`remove-bg-img h-auto w-24 md:w-32`} />
          </li>
        ))}
      </ul>
    </section>
  );
}
