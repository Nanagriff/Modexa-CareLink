import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import Image from 'next/image'
import doctorImg from "../../../assets/images/doctor.jpg"
// import { ServicesProps } from '@/types/types'


export default function ServiceCard() {
    return (

        <div className='grid max-w-full lg:grid-cols-5 gap-8 mt-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
        <Link href="#" className='round-md overflow-hidden bg-deepblue text-white hover:bg-slate-800 duration-300 flex gap-4 '>
            <div className="flex flex-col w-2/3 py-4">
                <h2>Telehealth</h2>
                <p className='text-[0.6rem]'>90 Doctors available</p>
            </div>
            
        </Link>
        <Link href="#" className='round-md overflow-hidden bg-deepblue text-white hover:bg-slate-800 duration-300 flex gap-4 '>
            <div className="flex flex-col w-2/3 py-4">
                <h2>Telehealth</h2>
                <p className='text-[0.6rem]'>90 Doctors available</p>
            </div>
            
        </Link>
        <Link href="#" className='round-md overflow-hidden bg-deepblue text-white hover:bg-slate-800 duration-300 flex gap-4 '>
            <div className="flex flex-col w-2/3 py-4">
                <h2>Telehealth</h2>
                <p className='text-[0.6rem]'>90 Doctors available</p>
            </div>
            
        </Link>
        <Link href="#" className='round-md overflow-hidden bg-deepblue text-white hover:bg-slate-800 duration-300 flex gap-4 '>
            <div className="flex flex-col w-2/3 py-4">
                <h2>Telehealth</h2>
                <p className='text-[0.6rem]'>90 Doctors available</p>
            </div>
        </Link>
        

        </div>
        
    )
}
