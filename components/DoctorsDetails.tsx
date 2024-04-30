"use client"

import React, { useState } from 'react'
export default function DoctorsDetails() {

    const [isActive, setIsActive] = useState("availability")

    return (
        <div className=''>
            <div className='flex justify-between items-center '>
                <button onClick={() => setIsActive("details")}
                    className={isActive=== "details"? "py-4 px-8 w-full bg-blue text-white": " border border-gray-200 bg-slate-100 py-4 px-8 w-full text-slate-800"}>Service Details</button>
                <button 
                onClick={() => setIsActive("availability")}
                className={isActive=== "availability"? "py-4 px-8 w-full bg-blue text-white": " border border-gray-200 bg-slate-100 py-4 px-8 w-full text-slate-800"}
                >Availability</button>
            </div>

            <div className="py-10 px-6">
                {isActive === "availability" ? (
                    <div>Availability Details Component</div>
                ) : (
                    <div>Service Details component</div>
                )}
            </div>
        </div>

    )
}
