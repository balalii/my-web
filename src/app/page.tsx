import CardHeader from '@/components/Home/CardHeader/CardHeader';
import Socials from '@/components/Home/Socials/Socials';
import Tech from '@/components/Home/Tech/Tech';

export default function Home() {
  return (
    <>
      <section className="container h-[650px] md:h-[82vh] lg:h-[83vh]  flex justify-between flex-col">
        <div>
          <div className="border-t border-e border-black ">
            <div
              className="rounded-tr-[3rem] md:rounded-tr-[6rem] border-t 
            border-e border-black  md:px-10 lg:px-20"
            >
              <h1
                className="text-[2.3rem] md:text-[3.5rem] pl-5 md:pl-0 font-[600] max-w-xs md:max-w-md
              leading-tight tracking-tight mt-10  "
              >
                The best ideas {`don't`} wait
              </h1>
            </div>
          </div>
          <div className="pt-4 md:pt-7 px-5 md:px-10 lg:px-20">
            <p className="lg:max-w-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit, Tempore veritatis temporibus ea. </p>
          </div>
        </div>
        <CardHeader />
      </section>
      <Tech />
      <Socials />
      <section></section>
    </>
  );
}
