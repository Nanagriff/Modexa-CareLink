import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import doctorImg from "../../../assets/images/doctor.jpg"
import { ServicesProps } from '@/types/types'


export default function ServiceCard({service}: {service:ServicesProps} ) {
    return (
        <Link href="#" className='round-md overflow-hidden bg-slate-100 hover:bg-slate-300 duration-300 flex gap-4 '>
            {/* <Image src={service.image}
                width={170}
                height={48}
                alt={service.title}
                 className='w-1/3  object-cover aspect-video' /> */}
            <div className="flex flex-col w-2/3 py-4">
                <h2>TeleHealth</h2>
                <p className='text-[0.6rem]'>90 Doctors available</p>
            </div>
        </Link>
    )
}
