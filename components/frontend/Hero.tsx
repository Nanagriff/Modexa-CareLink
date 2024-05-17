"use client"

import doctorImg from "../../assets/images/doctors.jpg"
import Image from "next/image";

import SearchBar from "./SearchBar";

import TextAnimation from "./TextAnimation";
import Link from "next/link";


const Hero = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="relative mx-[-20px] w-full dark:bg-slate-950 bg-white pt-[70px] lg:pt-[100px]">
        <div className="container dark:bg-slate-950 ">
          <div className="-mx-4 flex flex-col-reverse lg:flex-row">
            <div className="w-full px-[4px] pt-[50px] lg:w-6/12">
              <div className="hero-content lg:mt-[-70px]">
                <h1 className="mb-5 text-4xl font-bold !leading-[1.208]  text-[22px] lg:text-[40px] xl:text-5xl">
                  Instant Medical Healthcare, <span className="text-blue dark:text-cyan text-[20px] lg:text-[36px] xl:text-5xl"><TextAnimation /></span>
                </h1>
                <p className="mb-8 mt-5 max-w-[480px] dark:lg:text-[14px] font-extralight dark:lg:text-slate-50 dark:opacity-40 opacity-60  text-justify">
                  Modexa is a digital health startup that seeks to simplify the process of gathering health data. Our goal is to help healthcare providers and medical researchers understand health trends better and make informed decisions.
                </p>


                {/* SEARCH BAR */}
                <SearchBar />
                {/* CTA BUTTONS */}
                <ul className="flex flex-col lg:flex-row mt-[30px] gap-5 items-center">
                  <li>
                    <Link
                      href="/signIn"
                      className="inline-flex items-center justify-center  rounded-md  lg:py-[14px] lg:px-[50px] lg:text-[14px] text-[14px] px-[110px] py-[20px] text-center text-white font-medium dark:bg-cyan bg-blue hover:bg-opacity-95"
                    >
                      Get started
                    </Link>
                  </li>
                  <li>
                    <a
                      href="/#"
                      className="inline-flex dark:bg-white items-center px-[80px] py-[16px]  rounded-lg lg:px-[24px] lg:py-2 justify-center text-center border-[2px] text-[14px] border-blue font-medium text-blue "
                    >
                      <span className="mr-2">
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="12" cy="12.6152" r="12" fill="#3758F9" />
                          <rect
                            x="7.99893"
                            y="14.979"
                            width="8.18182"
                            height="1.63636"
                            fill="white"
                          />
                          <rect
                            x="11.2717"
                            y="7.61523"
                            width="1.63636"
                            height="4.09091"
                            fill="white"
                          />
                          <path
                            d="M12.0898 14.1606L14.9241 11.0925H9.25557L12.0898 14.1606Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      Download App
                    </a>
                  </li>
                </ul>

                {/* STATISTICS TAB ON THE MOBILE PAGE */}
                <div className="py-4 flex lg:hidden justify-center mt-5 gap-4">
                  <div className="flex-col flex">
                    <span className="font-bold text-center text-[18px] dark:text-cyan text-blue">1000 </span>
                    <span className="text-sm text-gray-500 dark:text-white ">Active Users</span>
                  </div>
                  <div className="flex-col flex">
                    <span className="font-bold text-center text-[18px] dark:text-cyan text-blue">600 </span>
                    <span className="text-sm text-gray-500 dark:text-white">Active Specialist</span>
                  </div>
                </div>
                <div className="clients text-center pt-14">
                </div>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-5/12">
              <div className="lg:ml-auto lg:text-right">
                <div className=" z-10 inline-block  pt-[5px] lg:pt-0">
                  <Image src={doctorImg} className="max-w-full lg:ml-auto  " alt="Doctor img" />
                  <span className="absolute -bottom-8 -left-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Hero;






