"use client";
import { companyLogos, CompanyLogo } from '@/constants'
import Image from 'next/image'
import React, { useState } from 'react'
import Marquee from 'react-fast-marquee'

export const Brands: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const handleMouseEnter = (category: string) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  return (
    <div className='lg:mt-[30px] bg-slate-30 overflow-hidden w-full flex flex-col gap-10 justify-center items-center'>
      <h2 className='lg:text-[32px] font-semibold dark:text-white text-black'>Our Partners</h2>
      <p className='text-blue dark:text-white dark:opacity-70 dark:font-light mt-[-30px]'>Great partners bring the greatest impact</p>
      <div className="max-w-[95%] mx-auto">
        <Marquee className='flex gap-10'>
          {companyLogos.map((logo: CompanyLogo, index: number) => (
            <div
              className={`flex items-center justify-center flex-1 h-[8.5rem] border-2 p-4 transition-all duration-300 mx-4 ${hoveredCategory === logo.category ? 'bg-blue border-blue' : 'bg-white border-gray-300'}`}
              key={index}
              style={{ minWidth: '200px', minHeight: '150px' }}
            >
              <Image src={logo.src} alt="logo" className='lg:w-[100px] lg:h-[80px] w-[70px] h-[70px]' />
            </div>
          ))}
        </Marquee>
      </div>
      <div className="flex gap-4 mt-4">
        <span
          onMouseEnter={() => handleMouseEnter('Healthcare')}
          onMouseLeave={handleMouseLeave}
          className='organization-type px-4 py-2 cursor-pointer transition-colors duration-300 hover:text-blue'
        >
          Healthcare
        </span>
        <span
          onMouseEnter={() => handleMouseEnter('Patient organizations')}
          onMouseLeave={handleMouseLeave}
          className='organization-type px-4 py-2 cursor-pointer transition-colors duration-300 hover:text-blue'
        >
          Patient organizations
        </span>
      </div>
    </div>
  )
}
