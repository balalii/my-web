import Image from 'next/image';
import SOCIAL_LIST from './../../data/SOCIAL_LIST';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white flex flex-col ">
      <div className="container center-col-flex justify-between py-10 pb-5 md:pb-10">
        <div>
          <span className="font-[600] text-2xl tracking-tighter">Iqbal Ali</span>
        </div>
        <div className="flex flex-col md:flex-row justify-between  space-y-6 md:space-y-0 mt-5  md:mt-10">
          <h6 className="font-[600] text-xl max-w-xs ">Build by the amazing community of fringe</h6>
          <div>
            <h6 className="font-[600] mt-3 md:mt-0 mb-0 md:mb-3 text-xl ">Email</h6>
            <p className="underline hover:cursor-pointer  mt-2  md:mt-0 ">iqbalali2606@gmail.com</p>
          </div>
          <div>
            <h6 className="font-[600] mt-3 md:mt-0 mb-0 md:mb-3 text-xl ">{`Social's`}</h6>
            <ul className="center-row-flex md:justify-between space-x-5 lg:space-x-8  mt-2  md:mt-0 ">
              {SOCIAL_LIST.map((data) => (
                <li key={data.name}>
                  <Link href={data.link} target="_blank">
                    <Image src={data.icon} width={30} height={30} alt="instagram" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="py-10  container">
        <p className="text-sm text-gray-600">© Copyrights {new Date().getFullYear()}. All Rights Reserved</p>
      </div>
    </footer>
  );
}
