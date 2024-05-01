"use client"
import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import Link from "next/link";


export default function Availability() {
    const [bookDate, setBookDate] = React.useState<Date | undefined>(new Date())
    const GMT = bookDate?.toString().split("GMT")[1].split(" ")[0];



    const formattedDate = `${bookDate
        ?.toString()
        .split(" ").slice(0, 3)
        .join(" ")} - GMT${GMT} `;
    // console.log(formattedDate)

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
        <div className="mt-[-20px] mb-[100px]">
            <h2 className="font-bold py-1 text-slate-800">Select a Date a time</h2>
            <div className="grid grid-cols-2 gap-4 lg:gap-0">
                <div className="sm:col-span-1  col-span-full">
                    <Calendar
                        mode="single"
                        selected={bookDate}
                        onSelect={setBookDate}
                        className="rounded-xl border"
                    />
                </div>
                <div className="sm:col-span-1 mt-5 col-span-full ">
                    <div className="px-4">
                        <h2 className=' border px-3 py-2 border-blue
                 font-semibold text-[14px] text-center'>
                            {formattedDate}
                        </h2>

                        <div className="py-3 grid grid-cols-3 gap-[16px]">
                            {timeStamps.slice(0, 5).map((item, i) => {
                                return <Link key={i} className='bg-blue hover:bg-royalBlue text-white py-[5px] px-[4px] text-center' href="/doctors/slug">
                                    {item.time} {item.period}
                                </Link>
                            })}
                            <button className='px-[4px] py-[4px] text-center text-black'>
                                More times
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
