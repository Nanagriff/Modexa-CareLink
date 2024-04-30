import DoctorsDetails from '@/components/DoctorsDetails'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='bg-slate-50  min-h-screen'>
      <div className="max-w-4xl bg-white border
       border-gray-200 shadow-md rounded-md mx-auto">
        <div className="py-10 px-8">
          <div className="flex items-center justify-between">
            <div className="">
            <div className="flex flex-col">
            <h2 className='font-bold uppercase text-[16px] lg:text-2xl tracking-wide'>Diana Boateng, PA</h2>
            <p className='text-gray-500'>Mental Health</p>
          </div>
          <div className="py-3">
          <p>Tele Helath</p>
          <p>Tse Addo Street, Accra Gh</p>
          </div>
            </div>
            <Image className='h-24 w-24 rounded-full object-cover'
                        src="/Doctorpa.jpg" 
                        width={243} alt='DoctorImg'
                         height={207} />
          </div>
        </div>
        <div className="py-1">
        <DoctorsDetails/>
        </div>
      </div>
    </div>
  )
}

