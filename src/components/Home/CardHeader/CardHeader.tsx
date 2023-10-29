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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16 -mt-4">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25
               18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
              />
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16 -mt-4">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5
               0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
              />
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
