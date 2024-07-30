import Button, { ButtonBorder } from '@/components/elements/Button';
import TextDescription from '../elements/TextDescription';

export default function Profile() {
  return (
    <section className="space-y-5 md:space-y-5 !mt-0">
      <TextDescription className="indent-20 md:indent-[40%]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo voluptatum, ea eos inventore aliquam culpa beatae iste laudantium minus deserunt sit tempora exercitationem nam vel laboriosam eum officia sunt necessitatibus at.
        Praesentium fugiat incidunt assumenda, asperiores rerum nesciunt dolorem sit amet dolore saepe, ex consectetur.
      </TextDescription>
      <div className="flex flex-col justify-between pt-4">
        <div className="bg-[url(/project/mee.png)] rounded-xl h-[24rem] bg-top w-full md:w-[30rem] bg-transparent  bg-cover bg-no-repeat  grayscale hover:grayscale-0 transition-all cursor-pointer hover:bg-transparent" />
        <p className="text-right right-0  mt-8 md:mt-0 text-[50px] md:text-[70px] uppercase tracking-wider font-roboto font-extrabold">
          <span className=" ">Iqbal</span> Ali
        </p>
      </div>
      {/* <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo voluptatum, ea eos inventore aliquam culpa beatae iste laudantium minus deserunt sit tempora exercitationem nam vel laboriosam eum officia sunt necessitatibus at.
        Praesentium fugiat incidunt assumenda, asperiores rerum nesciunt dolorem sit amet dolore saepe.
      </p> */}
      <TextDescription className="indent-20 md:indent-[40%]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo voluptatum, ea eos inventore aliquam culpa beatae iste laudantium minus deserunt sit tempora exercitationem nam vel laboriosam eum officia sunt necessitatibus at.
        Praesentium fugiat incidunt assumenda, asperiores rerum nesciunt dolorem sit amet dolore saepe.
      </TextDescription>
      <p className="text-center pt-3">
        <ButtonBorder>
          Download Cv
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ms-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
        </ButtonBorder>
      </p>
    </section>
  );
}
