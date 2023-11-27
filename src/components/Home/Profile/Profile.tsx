import Button from '@/components/elements/Button';

export default function Profile() {
  return (
    <section className="space-y-5 md:space-y-8">
      <p className="indent-32 md:indent-64">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo voluptatum, ea eos inventore aliquam culpa beatae iste laudantium minus deserunt sit tempora exercitationem nam vel laboriosam eum officia sunt necessitatibus at.
        Praesentium fugiat incidunt assumenda, asperiores rerum nesciunt dolorem sit amet dolore saepe, ex consectetur.
      </p>
      <div className="flex flex-col justify-between pt-4">
        <div className="bg-[url(/me.png)] rounded-xl h-[17rem] w-56 bg-gray-300/80  bg-cover bg-no-repeat bg-center grayscale hover:grayscale-0 transition-all cursor-pointer hover:bg-blue-950" />
        <span className="text-right right-0 font-bold font-roboto mt-8 md:mt-0 text-[40px] md:text-[70px] uppercase">Iqbal Ali</span>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo voluptatum, ea eos inventore aliquam culpa beatae iste laudantium minus deserunt sit tempora exercitationem nam vel laboriosam eum officia sunt necessitatibus at.
        Praesentium fugiat incidunt assumenda, asperiores rerum nesciunt dolorem sit amet dolore saepe, ex consectetur corrupti officia. aut.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo voluptatum, ea eos inventore aliquam culpa beatae iste laudantium minus deserunt sit tempora exercitationem nam vel laboriosam eum officia sunt necessitatibus at.
        Praesentium fugiat incidunt assumenda, asperiores rerum nesciunt dolorem sit amet dolore saepe, ex consectetur corrupti officia. aut.
      </p>
      <p className='text-center'>

      <Button>
        Download Cv
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ms-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
      </Button>
      </p>
    </section>
  );
}
