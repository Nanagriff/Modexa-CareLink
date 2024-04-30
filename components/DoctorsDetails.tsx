"use client"

import React, { useState } from 'react'
export default function DoctorsDetails() {

    const [isActive, setIsActive] = useState("availability")

    return (
        <div className=''>
            <div className='flex justify-between items-center '>
                <button onClick={()=> setIsActive("details")}
                 className='px-4 bg-blue py-4 w-full font-medium uppercase tracking-wider text-white '>Service Details</button>
                <button onClick={()=> setIsActive("availability")} className='bg-slate-100 border font-medium uppercase tracking-wider border-gray-200 w-full py-4 px-4 text-slate-800'>Availability</button>
            </div>
            <div className="py-10 px-6">
                {isActive === "availability"? (
            <div>Availability Details Component</div>
                ): (
                    <div>Service Details component</div>
                ) }
            </div>
        </div>

    )
}
