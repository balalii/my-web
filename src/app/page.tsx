import CardHeader from '@/components/CardHeader/CardHeader';

export default function Home() {
  return (
    <section className="container max-h-[86vh] h-[82vh]  flex justify-between flex-col">
      <div>
        <div className="border-t border-e border-black ">
          <div className="rounded-tr-[3rem] md:rounded-tr-[6rem] border-t border-e border-black  md:px-20">
            <h1 className="text-[4.5rem] font-[600] lg:max-w-xl leading-tight tracking-tight mt-10  ">The best ideas {`don't`} wait</h1>
          </div>
        </div>
        <div className="pt-7 px-20">
          <p className="lg:max-w-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit, Tempore veritatis temporibus ea. </p>
        </div>
      </div>
      <CardHeader />
    </section>
  );
}
