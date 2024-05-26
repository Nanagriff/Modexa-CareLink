"use client"
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import BioDataForm from './BioDataForm';
import ContactInfo from './ContactInfo';
import ProfessionalInfo from './ProfessionalInfo';
import EducationalInfo from './EducationalInfo';
import PracticeInfo from './PracticeInfo';
import AdditionalInfo from './AdditionalInfo';
import AvailabilityInfo from './AvailabilityInfo';

export default function OnboardingSteps({ id }: { id: string }) {
  const params = useSearchParams();
  const page = params.get("page"); // Ensure default page value is a valid step
  // console.log(page);

  const steps = [
    {
      title: "Bio Data",
      page: "bio-data",
      component: <BioDataForm />
    },
    {
      title: "Contact Information",
      page: "contact",
      component: <ContactInfo />
    },
    {
      title: "Professional Information",
      page: "profession",
      component: <ProfessionalInfo />
    },
    {
      title: "Education Information",
      page: "education",
      component: <EducationalInfo />
    },
    {
      title: "Practice Information",
      page: "practice",
      component: <PracticeInfo />
    },
    {
      title: "Additional Information",
      page: "additional",
      component: <AdditionalInfo />
    },

    {
      title: "Availability",
      page: "availability",
      component: <AvailabilityInfo />
    },
  ];

  const currentStep = steps.find((steps) => steps.page === page)
  console.log(currentStep)



  return (
    <div className='grid grid-cols-12 mx-auto shadow-inner overflow-hidden min-h-screen dark:bg-white bg-slate-100'>
      <div className="col-span-full sm:col-span-3 divide-y-2 divide-gray-200">
        {steps.map((step, i) => {
          const isActive = step.page === page;
          return (
            <Link
              key={i}
              className={cn("block py-4 px-4 uppercase bg-slate-300 dark:bg-slate-950 dark:text-slate-100 text-slate-800 shadow-inner", {
                "bg-best dark:bg-slate-400 text-slate-100": isActive
              })}
              href={`/onboarding/${id}?page=${step.page}`}>
              {step.title}
            </Link>
          );
        })}
      </div>
      <div className="sm:col-span-9 col-span-full dark:text-black p-4">
        {currentStep?.component}
      </div>
    </div>
  );
}
