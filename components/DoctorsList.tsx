import React from 'react'
import SectionHeading from './SectionHeading'
import ToggleButton from './ToggleButton'
import Link from 'next/link'
import DoctorCard from './DoctorCard'
import DoctorListCarousel from './DoctorListCarousel'

export default function DoctorsList({ title = "TeleHealth" }: { title?: string }) {

  const doctors = [
    {
      name: "Elizabeth Amoah",
      address: "oliveria street 3310 Accra",
      Category: "Physician Assistant",
    },
    {
      name: "Kwame Amoako",
      address: "oliveria street 3310 Accra",
      Category: "Radiographer",
    }, {
      name: "Irene Mensah",
      address: "oliveria street 3310 Accra",
      Category: "Medical Doctor",
    },
    {
      name: "Irene Mensah",
      address: "oliveria street 3310 Accra",
      Category: "Medical Doctor",
    }, {
      name: "Irene Mensah",
      address: "oliveria street 3310 Accra",
      Category: "Medical Doctor",
    }, {
      name: "Irene Mensah",
      address: "oliveria street 3310 Accra",
      Category: "Medical Doctor",
    },


  ]

  return (
    <div className='bg-slate-100 py-8 lg:p-10' >
      <div className="max-w-6xl mx-[25px] lg:mx-auto">
        <SectionHeading title={title} />
        <div className="py-4 flex items-center justify-between">
          <ToggleButton />
          <Link href="#" className='text-blue py-2 px-3 border border-regalblue bg-white'>
            See All
          </Link>
        </div>
        <div className="py-6">
          <DoctorListCarousel doctors={doctors} />
        </div>
      </div>
    </div>

  )
}

