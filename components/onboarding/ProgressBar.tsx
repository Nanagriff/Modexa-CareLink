import React from 'react';


interface Step {
  title: string;
  page: string;
  component: React.ReactNode;
}


interface ProgressBarProps {
  steps: Step[];
  currentStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ steps, currentStep }) => {
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="w-full mb-6">
      <div className="w-full bg-gray-200 h-2 rounded-full">
        <div
          className="bg-blue h-2 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex justify-between mt-2">
        {steps.map((step, index) => (
          <span key={index} className={`text-sm ${index <= currentStep ? 'text-blue-500' : 'text-gray-400'}`}>
            {step.title}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
