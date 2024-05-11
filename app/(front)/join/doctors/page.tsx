import CustomButton from '@/components/CustomButton'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function page() {
    return (
        <div className='min-h-screen '>
            <section className='lg:py-10 sm:py-6 md:py-8 px-5' >
                <div className='max-w-6xl mx-auto gap-4 grid grid-cols-1 md:grid-cols-2'>
                    <div className="">
                        <h2 className='md:text-[2.5rem] text-[1.5rem] md:leading-[3.5rem] text-left font-medium'>Build a thriving <span className='text-blue font-semibold'>direct-pay</span> {" "} practice with Carelink</h2>
                        <p className='py-8'>Welcome to Carelink, where connecting with patients is made easier than ever before.
                            Our platform streamlines the process of managing appointments, providing care remotely
                            and keeping track of patient records.</p>
                            <Link href="#">
                        <CustomButton title="List your Service" />
                            </Link>
                        
                    </div>
                    <Image alt='DoctorImage'height={848} width={1170} className='' src="/login.jpg" />
                </div>
            </section>
        </div>
    )
}
