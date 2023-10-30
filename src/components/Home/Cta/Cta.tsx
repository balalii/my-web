import Link from 'next/link';

export default function Cta() {
  return (
    <section className=" text-white bg-[#102c57b4]">
      <div
        className="container md:text-center mx-auto flex flex-col md:items-center justify-center 
      lg:min-h-[90vh] lg:max-h-[90vh] py-36 lg:py-0"
      >
        <h2
          className="text-[2rem] md:text-[3rem] lg:text-[4rem] md:pl-0 font-[500] 
              leading-tight tracking-tight   "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing .
        </h2>
        <p className="  mt-5 mb-10 lg:text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit amet consectetur elit.</p>
        <Link href={''}>
          <button className="bg-black transition-all hover:bg-[#0F2C59]  rounded-xl px-8 py-4 text-white inline-flex ">
            Download CV
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
}
