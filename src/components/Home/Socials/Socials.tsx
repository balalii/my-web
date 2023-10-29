import Image from 'next/image';
import Link from 'next/link';
import TECH_LIST from './../../../data/TECH_LIST';
import SOCIAL_LIST from '@/data/SOCIAL_LIST';

export default function Socials() {
  return (
    <section className="container">
      <div className="md:px-10 lg:px-20">
        <h2
          className="text-[2.3rem] md:text-[3rem] md:pl-0 font-[600] 
              leading-tight tracking-tight mt-10 lg:max-w-3xl  "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
        <p className="text-gray-700 max-w-sm mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit amet consectetur elit.</p>
      </div>
      <div className="mt-20">
        <ul className="flex flex-col md:flex-row justify-center">
          {SOCIAL_LIST.map((data) => (
            <li key={data.name} className="group" title={`Visit to my ` + data.name}>
              <Link href={data.link}>
                <div className="rounded-3xl flex flex-row p-6 lg:p-8 border border-black">
                  {/* icon */}
                  <div className="pr-2 lg:pr-4 md:hidden lg:block">
                    <Image src={data.icon} alt={data.name} width={50} height={50} />
                  </div>
                  {/* text */}
                  <div className="pl-3">
                    <h3 className="font-[500] text-lg ">{data.name}</h3>
                    <span className="text-sm text-gray-700 line-clamp-2 md:line-clamp-none lg:line-clamp-2 leading-snug pt-2 pb-4">{data.desc}</span>
                    <span className="font-semibold inline-flex items-center  group-hover:underline">
                      Visit
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
