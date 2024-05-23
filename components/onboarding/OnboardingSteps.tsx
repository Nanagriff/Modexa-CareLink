"use client"
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function OnboardingSteps() {
  const params = useSearchParams()
  const page = params.get("page") ?? 5;
  console.log(page)

  return (
    <div className='grid grid-cols-12 mx-auto shadow-inner
    overflow-hidden   min-h-screen dark:bg-white bg-slate-200'>
      <div className="col-span-full  sm:col-span-2 divide-y-2 divide-gray-200">
        <Link href="#" className='block py-4 px-4 bg-best uppercase  dark:bg-slate-950 text text-slate-100 shadow-inner '>Bio Information</Link>
        <Link href="#" className='block py-4 px-4 bg-slate-300   dark:bg-slate-950 text text-slate-800 shadow-inner '>Step1</Link>
        <Link href="#" className='block py-4 px-4 bg-slate-300  dark:bg-slate-950 text text-slate-800 shadow-inner '>Step1</Link>
        <Link href="#" className='block py-4 px-4 bg-slate-300  dark:bg-slate-950 text text-slate-800 shadow-inner '>Step1</Link>
        <Link href="#" className='block py-4 px-4 bg-slate-300  dark:bg-slate-950 text text-slate-800 shadow-inner '>Step1</Link>
      </div>
      <div className="sm:col-span-10 col-span-full dark:text-black p-4">
        <h1>Form1</h1>
        <h1>Form1</h1>
        <h1>Form1</h1>
        <h1>Form1</h1>
        <h1>Form1</h1>
        <h1>Form1</h1>
      </div>
    </div>
  )
}
