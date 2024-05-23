"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function OnboardingSteps() {
const params = useSearchParams()
const page = params.get("page") ?? 5;
console.log(page)


  return (
    <div className='grid grid-cols-12 mx-auto'>
      <div className="col-span-full sm:col-span-2 bg-red-600">
        <h1>Step1</h1>
        <h1>Step1</h1>
        <h1>Step1</h1>
        <h1>Step1</h1>
        <h1>Step1</h1>
        <h1>Step1</h1>
      </div>
      <div className="sm:col-span-10 col-span-full bg-green-500">
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
