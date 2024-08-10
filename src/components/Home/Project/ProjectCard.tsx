import Image from 'next/image';
import { IProject } from './DATA_PROJECT';

export default function ProjectCard({ data }: { data: IProject }) {
  return (
    <div className="grid grid-cols-9 uppercase gap-y-5 md:gap-x-3 !font-sans pt-5 pb-5 !border-b border-[var(--primary-color)]">
      <div className=" col-span-full md:col-span-3">
        <h3 className="font-medium text-4xl md:pr-10 font-sans leading-none">{data.title}</h3>
      </div>

      <div className="order-3 md:order-2 col-span-full md:col-span-2">
        <ul className="text-lg  font-medium flex flex-row md:flex-col flex-wrap space-x-3 md:space-x-0">
          {data.tag.map((data, idx) => (
            <li key={idx}>{data}</li>
          ))}
        </ul>
      </div>

      <div className="flex md:block order-2 md:order-3 col-span-full md:col-span-4  flex-row items-start justify-center md:ml-24">
        <Image className="w-full md:max-h-[26rem] object-cover " src={data.img} width={1000} height={1000} alt={data.title} />
      </div>
    </div>
  );
}
