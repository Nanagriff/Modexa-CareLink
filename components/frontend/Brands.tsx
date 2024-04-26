import { companyLogos } from '@/constants'
import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

export const Brands = () => {
  return (
    <div className='lg:mt-[30px] bg-slate-30 overflow-hidden w-full flex flex-col gap-10 justify-center items-center'>
      <h2 className='lg:text-[32px] font-semibold text-black'>Our Partners</h2>
      <p className='text-blue font-semibold mt-[-30px]'>These are our Cherishable Partners</p>
<div className="max-w-[95%] mx-auto">

<Marquee className='flex gap-10'>
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center px-[40px] mx-5 justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <Image src={logo} alt="logo" className='lg:w-[100px] lg:h-[80px] w-[70px] h-[70px] ' />
          </li>
        ))}
      </Marquee>
</div>
    </div>
  )
}
