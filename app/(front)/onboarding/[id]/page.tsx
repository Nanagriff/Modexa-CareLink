import OnboardingSteps from '@/components/onboarding/OnboardingSteps'
import React from 'react'

export default function page({params: {id} }: {params: {id: string}}) {
  return ( 
    <div className=' lg:mt-[50px]'>
    <div className="max-w-6xl mx-auto lg:py-10 min-h-screen">
    <OnboardingSteps/>
    </div>
    </div>
  )
}

