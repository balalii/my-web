import Image from 'next/image';

export default function Profile() {
  return (
    <section className="space-y-5 md:space-y-8">
      <p className="indent-32 md:indent-64">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo voluptatum, ea eos inventore aliquam culpa beatae iste laudantium minus deserunt sit tempora exercitationem nam vel laboriosam eum officia sunt necessitatibus at.
        Praesentium fugiat incidunt assumenda, asperiores rerum nesciunt dolorem sit amet dolore saepe, ex consectetur.
      </p>
      <div className="flex flex-col justify-between pt-4">
        <div className="bg-[url(/me.png)]  h-[17rem] w-56 bg-gray-300/80  bg-cover bg-no-repeat bg-center grayscale hover:grayscale-0 transition-all cursor-pointer hover:bg-blue-950" />
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
    </section>
  );
}
