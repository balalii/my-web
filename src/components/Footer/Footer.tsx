import Image from 'next/image';

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
            <p className="hover:underline hover:cursor-pointer  mt-2  md:mt-0 ">ucupulalal@gmail.com</p>
          </div>
          <div>
            <h6 className="font-[600] mt-3 md:mt-0 mb-0 md:mb-3 text-xl ">Social</h6>
            <ul className="center-row-flex md:justify-between space-x-5 md:space-x-8  mt-2  md:mt-0 ">
              <li>
                <Image src={'icon/instagram.svg'} width={45} height={45} alt="instagram" />
              </li>
              <li>
                <Image src={'icon/github.svg'} width={30} height={30} alt="github" />
              </li>
              <li>
                <Image src={'icon/linkedin.svg'} width={35} height={35} alt="linkedin" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-10  container">
        <p className="text-sm text-gray-600">© Copyrights 2020. All Rights Reserved</p>
      </div>
    </footer>
  );
}
