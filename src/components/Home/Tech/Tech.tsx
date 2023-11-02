import Image from 'next/image';
import Link from 'next/link';
import TECH_LIST from './../../../data/TECH_LIST';

export default function Tech() {
  return (
    <section className="container lg:min-h-[60vh] lg:max-h-[60vh] flex flex-col items-center justify-center" id="tech">
      <h2 className="text-4xl md:text-3xl md:text-[2.5rem] font-[500] text-center">
        <span className="hidden md:inline-flex">My</span> Tech Frontend
      </h2>
      <ul className="flex flex-row justify-center items-center  flex-wrap max-w-4xl mx-auto mt-8 md:mt-10">
        {TECH_LIST.map((data) => (
          <li key={data.name} className="center-row-flex  my-3 mx-5 md:mx-10 lg:mx-16">
            <Image src={data.img} height={130} width={130} alt={data.name} title={data.name} className={`mix-blend-multiply h-auto w-24 md:w-32`} />
          </li>
        ))}
      </ul>
    </section>
  );
}
