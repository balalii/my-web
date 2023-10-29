import Link from 'next/link';

export default function CardHeader() {
  return (
    <div className="w-[90%] mx-auto">
      <ul className="flex flex-col md:flex-row justify-center  md:border-t border-black">
        <li className="group">
          <Link
            href={''}
            className="border-s md:border-s-0  border-e  border-t border-black p-5 -mb-8 md:-mb-0 lg:p-8 pb-14 md:pb-3 
          flex flex-row space-x-5  md:-mr-[1px] rounded-tl-[2rem] md:rounded-tl-[0px] rounded-tr-[2rem]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 -mt-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>

            <div>
              <h3 className="font-[500] text-xl group-hover:underline">Tech Stack</h3>
              <p className="text-sm text-gray-700 mt-2 line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </Link>
        </li>
        <li className="group">
          <Link
            href={''}
            className="border-e border-s border-t border-black p-5
           -mb-8 md:-mb-0 lg:p-8 pb-14 md:pb-3 flex flex-row space-x-5  rounded-tl-[2rem] rounded-tr-[2rem]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16 -mt-4">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25
               2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
              />
            </svg>
            <div>
              <h3 className="font-[500] text-xl group-hover:underline">Project</h3>
              <p className="text-sm text-gray-700 mt-2 line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing adipisicing elit.</p>
            </div>
          </Link>
        </li>
        <li className="group">
          <Link
            href={''}
            className=" border-s border-e md:border-e-0  border-t border-black p-5 
           lg:p-8 pb-6 md:pb-3 flex flex-row space-x-5   md:-ml-[1px] rounded-tr-[2rem] md:rounded-tr-[0px] rounded-tl-[2rem] "
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 -mt-4">
              <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
            </svg>

            <div>
              <h3 className="font-[500] text-xl group-hover:underline">{`Social's`} </h3>
              <p className="text-sm text-gray-700 mt-2 line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
