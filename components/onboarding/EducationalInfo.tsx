import React from 'react';

interface EducationalInfoProps {
  onComplete?: () => void; // Optional onComplete function
}

export default function EducationalInfo({ onComplete }: EducationalInfoProps) {
  const handleCompletion = () => {
    if (onComplete) {
      onComplete(); // Call onComplete when this component is completed
    }
  };

  return (
    <div>
      <h1>Education Information</h1>
      {/* Add your form or content here */}
      <button onClick={handleCompletion}>Complete Section</button>
    </div>
  );
}
