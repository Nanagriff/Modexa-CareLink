import { Stethoscope, Video } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



export default function DoctorCard() {

    const timeStamps = [
        {
            time: "8:30",
            period: "am"
        },
        {
            time: "8:30",
            period: "am"
        }, {
            time: "10:30",
            period: "am"
        }, {
            time: "11:30",
            period: "am"
        }, {
            time: "12:30",
            period: "pm"
        },
        {
            time: "12:30",
            period: "pm"
        }, {
            time: "1:30",
            period: "pm"
        }, {
            time: "2:30",
            period: "pm"
        },
    ]


    return (
        <div
            className='border  bg-white dark:bg-slate-900 inline-flex flex-col py-4 px-4 rounded-md
            hover:border-gray-400 duration-300 transition-all'>
            <Link href="/doctors/slug">
                <h2 className='font-bold uppercase text-[16px] lg:text-2xl tracking-wide'>Diana Boateng, PA</h2>
                <p className='py-3'>Tse Addo Street, Accra Gh</p>
                <div className="flex items-center gap-4 py-4">
                    <div className="relative">
                        <Image className='h-24 w-24 rounded-full object-cover'
                            src="/Doctorpa.jpg"
                            width={243} alt='DoctorImg'
                            height={207} />
                        <p className='bg-lightblue dark:bg-white dark:text-black bottom-0 right-1 absolute w-10  flex items-center 
                         justify-center rounded-full h-10 text-blue'>
                            <Video className='w-6 h-6 ' />
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className='flex items-center'>
                            <Stethoscope className='w-4 h-4 mr-2 flex-shrink-0' />
                            <span>Mental Health</span>
                        </p>
                        <p className="bg-green-300 dark:bg-cyan text-[10px] py-2 font-medium hover:bg-green-200 px-2 uppercase">
                            Available today
                        </p>
                    </div>
                </div>
            </Link>
            <div className="mt-6 border-t border-gray-400">
                <h3 className='flex items-center justify-between gap-4'>
                    <span className='text-gray-600 dark:text-slate-100'>Tue, April 29th</span>
                    <span className='font-bold text-blue dark:text-white'>&#8373; 30</span>
                </h3>
                <div className="py-3 grid grid-cols-3 gap-[16px]">
                    {timeStamps.slice(0, 5).map((item, i) => {
                        return <Link key={i} className='bg-blue dark:bg-white dark:text-black hover:bg-royalBlue text-white py-[5px] px-[4px] text-center' href="/doctors/slug">
                            {item.time} {item.period}
                        </Link>
                    })}
                    <Link href="/doctors/slug" className='px-[4px] py-[4px] text-center dark:text-white text-black'>
                        More times
                    </Link>
                </div>
            </div>
        </div>
    )
}
