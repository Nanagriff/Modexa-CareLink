"use client"
import { Plus } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'




export default function FixedBookedButton() {
  return (
    <div className="fixed bottom-0 z-50  w-full shadow-2xl
     lg:py-4 px-6 py-3 dark:bg-slate-950 bg-slate-100 border
    border-gray-200  rounded-md">
      <div className="max-w-4xl mx-auto gap-4 flex items-center justify-between">
        <div className="w-full">
          <p className=' text-xl font-bold'>&#8373; 30</p>
          <p className='font-medium text-sm'>Tue, April 29th GMT 8:00am </p>
        </div>
        <Button
          variant="outline"
          className="inline-flex items-center w-full justify-center px-4
               py-6 text-sm font-semibold leading-5 tracking-widest text-white
                transition-all duration-200 bg-blue border 
              border-transparent uppercase rounded-lg 
              focus:outline-none focus:ring-2 
              focus:ring-offset-2 focus:ring-blue-600 
              hover:bg-regalblue hover:text-slate-50"
        >
          <Plus className="w-5 h-5 mr-1" />
          Book
        </Button>
      </div>

    </div>
  )
}

