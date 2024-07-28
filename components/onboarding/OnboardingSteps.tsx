"use client";
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import React from 'react';
import BioDataForm from './BioDataForm';
import ContactInfo from './ContactInfo';
import ProfessionalInfo from './ProfessionalInfo';
import EducationalInfo from './EducationalInfo';
import PracticeInfo from './PracticeInfo';
import AdditionalInfo from './AdditionalInfo';
import AvailabilityInfo from './AvailabilityInfo';
import ProgressBar from './ProgressBar'; // Ensure this import is correct

type OnboardingStep = 'bio-data' | 'contact' | 'profession' | 'education' | 'practice' | 'additional' | 'availability';

type Step = {
  title: string;
  page: OnboardingStep;
  component: React.ReactElement;
};

export default function OnboardingSteps({ id }: { id: string }) {
  const router = useRouter();
  const params = useSearchParams();
  const page = (params.get('page') as OnboardingStep) || 'bio-data'; // Ensure default page value is a valid step
  const [completedSteps, setCompletedSteps] = useState<OnboardingStep[]>([]);

  const steps: Step[] = [
    { title: "Bio Data", page: 'bio-data', component: <BioDataForm onComplete={() => handleCompleteStep('bio-data')} /> },
    { title: "Contact Information", page: 'contact', component: <ContactInfo onComplete={() => handleCompleteStep('contact')} /> },
    { title: "Professional Information", page: 'profession', component: <ProfessionalInfo onComplete={() => handleCompleteStep('profession')} /> },
    { title: "Education Information", page: 'education', component: <EducationalInfo onComplete={() => handleCompleteStep('education')} /> },
    { title: "Practice Information", page: 'practice', component: <PracticeInfo onComplete={() => handleCompleteStep('practice')} /> },
    { title: "Additional Information", page: 'additional', component: <AdditionalInfo onComplete={() => handleCompleteStep('additional')} /> },
    { title: "Availability", page: 'availability', component: <AvailabilityInfo onComplete={() => handleCompleteStep('availability')} /> },
  ];

  const currentStepIndex = steps.findIndex(step => step.page === page);
  const currentStep = steps[currentStepIndex];

  const handleCompleteStep = (completedPage: OnboardingStep) => {
    if (!completedSteps.includes(completedPage)) {
      setCompletedSteps([...completedSteps, completedPage]);
      const nextStepIndex = currentStepIndex + 1;
      if (nextStepIndex < steps.length) {
        const nextStepPage = steps[nextStepIndex].page;
        router.push(`/onboarding/${id}?page=${nextStepPage}`);
      } else {
        // Handle case when all steps are completed (e.g., redirect to a different page)
      }
    }
  };

  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-800 p-6'>
      <ProgressBar steps={steps} currentStep={currentStepIndex} />
      <div className='flex'>
        <div className='w-1/4'>
          {steps.map((step, index) => {
            const isActive = step.page === page;
            const isCompleted = completedSteps.includes(step.page) || currentStepIndex > index;
            return (
              <Link
                key={index}
                className={`block py-4 px-4 mb-2 rounded-lg ${isActive ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'} ${isCompleted ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                href={isCompleted ? `/onboarding/${id}?page=${step.page}` : '#'}
              >
                {step.title}
              </Link>
            );
          })}
        </div>
        <div className='w-3/4 p-4 bg-white rounded-lg shadow-md'>
          {React.cloneElement(currentStep.component, { onComplete: () => handleCompleteStep(currentStep.page) })}
        </div>
      </div>
    </div>
  );
}
