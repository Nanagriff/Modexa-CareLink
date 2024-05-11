import Footer from '@/components/frontend/Footer'
import Navbar from '@/components/frontend/Navbar'
import React, { ReactNode } from 'react'

export default function Layout({children}:{children:ReactNode}) {
  return (
    <div className='bg-white'>
      <Navbar/>
      <div className="lg:mt-[90px] mt-[20px] mx-[20px] lg:mx-[30px]">
      {children}
      <Footer/>
      </div>
    </div>
  )
}
