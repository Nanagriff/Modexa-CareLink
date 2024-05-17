import Footer from '@/components/frontend/Footer'
import Navbar from '@/components/frontend/Navbar'
import React, { ReactNode } from 'react'

export default function Layout({children}:{children:ReactNode}) {
  return (
    <div className='bg-white w-full dark:bg-slate-950'>
      <Navbar/>
      <div className="lg:mt-[50px] mt-[20px] mx-[20px] lg:mx-[30px]">
      {children}
      <Footer/>
      </div>
    </div>
  )
}
